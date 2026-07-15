import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'
import { articles } from '../lib/articles'
import { photos } from '../lib/photography'
import { siteChanges } from '../lib/changes'
import { books } from '../lib/books'

// Simple helper to load environment variables from .env.local
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8')
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
      if (match) {
        const key = match[1]
        let value = match[2] || ''
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1)
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1)
        }
        process.env[key] = value.trim()
      }
    })
  }
}

loadEnv()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("\n[ERROR] NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local")
  console.log("Please create a .env.local file in the project root with the following variables:")
  console.log("NEXT_PUBLIC_SUPABASE_URL=your_project_url")
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key")
  console.log("SUPABASE_SERVICE_ROLE_KEY=your_service_role_key\n")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false
  }
})

async function runMigration() {
  console.log("Starting migration to Supabase...")

  // 1. Migrate articles
  console.log("\nMigrating articles...")
  await supabase.from('articles').delete().neq('date', '')
  const { error: articlesErr } = await supabase.from('articles').insert(
    articles.map(a => ({
      date: a.date,
      title: a.title,
      href: a.href,
      takeaway: a.takeaway,
      tags: a.tags || [],
      content: a.content || null
    }))
  )
  if (articlesErr) {
    console.error("Failed to migrate articles:", articlesErr.message)
  } else {
    console.log(`Successfully migrated ${articles.length} articles!`)
  }

  // 2. Migrate site changes
  console.log("\nMigrating site changes...")
  await supabase.from('site_changes').delete().neq('date', '')
  const { error: changesErr } = await supabase.from('site_changes').insert(
    siteChanges.map(c => ({
      date: c.date,
      added: c.added || [],
      fixed: c.fixed || [],
      changed: c.changed || []
    }))
  )
  if (changesErr) {
    console.error("Failed to migrate site changes:", changesErr.message)
  } else {
    console.log(`Successfully migrated ${siteChanges.length} site changes!`)
  }

  // 3. Migrate books
  console.log("\nMigrating books...")
  await supabase.from('books').delete().neq('title', '')
  const { error: booksErr } = await supabase.from('books').insert(
    books.map(b => ({
      title: b.title,
      author: b.author,
      publishedYear: b.publishedYear,
      rating: b.rating || null,
      coverUrl: b.coverUrl,
      wikiUrl: b.wikiUrl,
      review: b.review || null,
      status: b.status || null
    }))
  )
  if (booksErr) {
    console.error("Failed to migrate books:", booksErr.message)
  } else {
    console.log(`Successfully migrated ${books.length} books!`)
  }

  // 4. Migrate photos and upload images
  if (process.env.SKIP_PHOTOS === 'true') {
    console.log("\nSkipping photos migration & upload as requested (SKIP_PHOTOS=true).")
  } else {
    console.log("\nMigrating photos & uploading images to Supabase Storage...")
    await supabase.from('photos').delete().neq('name', '')
    
    let successCount = 0
    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i]
      const localPath = path.join(process.cwd(), 'public', photo.src)
      
      if (!fs.existsSync(localPath)) {
        console.warn(`Warning: Local file not found at ${localPath}. Skipping upload.`)
        continue
      }

      const fileBuffer = fs.readFileSync(localPath)
      const storagePath = photo.src.replace(/^\/gallery\//, '')

      console.log(`[${i+1}/${photos.length}] Uploading ${storagePath}...`)
      
      const { error: uploadErr } = await supabase.storage
        .from('gallery')
        .upload(storagePath, fileBuffer, {
          contentType: 'image/jpeg',
          upsert: true
        })

      if (uploadErr) {
        console.error(`Failed to upload ${storagePath}:`, uploadErr.message)
        continue
      }

      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(storagePath)

      const { error: photoErr } = await supabase.from('photos').insert({
        src: publicUrl,
        alt: photo.alt,
        name: photo.name,
        gallery: photo.gallery
      })

      if (photoErr) {
        console.error(`Failed to insert record for ${storagePath}:`, photoErr.message)
      } else {
        successCount++
      }
    }
    console.log(`\nMigration completed! Successfully uploaded and recorded ${successCount}/${photos.length} photos.`)
  }
}

runMigration().catch(e => {
  console.error("Migration crashed:", e)
})
