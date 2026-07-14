const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const GALLERY_DIR = path.join(PUBLIC_DIR, 'gallery');
const LIB_DIR = path.join(__dirname, '..', 'lib');
const OUTPUT_TS = path.join(LIB_DIR, 'photography.ts');

function processImages() {
  console.log('Scanning gallery directory...');
  
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error(`Gallery directory does not exist at ${GALLERY_DIR}`);
    process.exit(1);
  }

  // Get all subdirectories in public/gallery/
  const subdirs = fs.readdirSync(GALLERY_DIR).filter(file => {
    return fs.statSync(path.join(GALLERY_DIR, file)).isDirectory();
  });

  const photoList = [];

  subdirs.forEach(subdir => {
    let currentSubdirName = subdir;
    let dirPath = path.join(GALLERY_DIR, currentSubdirName);
    
    // Normalize folder name: lowercase and replace spaces with hyphens
    const normalizedSubdirName = subdir.toLowerCase().replace(/\s+/g, '-');
    if (currentSubdirName !== normalizedSubdirName) {
      const newDirPath = path.join(GALLERY_DIR, normalizedSubdirName);
      console.log(`Renaming gallery folder on disk: "${subdir}" -> "${normalizedSubdirName}"`);
      try {
        fs.renameSync(dirPath, newDirPath);
        currentSubdirName = normalizedSubdirName;
        dirPath = newDirPath;
      } catch (err) {
        console.error(`Failed to rename directory ${subdir}:`, err.message);
        return; // Skip this directory if we can't rename it
      }
    }

    const galleryKey = currentSubdirName;
    console.log(`\nProcessing gallery: ${galleryKey}`);

    // Get all files in this gallery
    const files = fs.readdirSync(dirPath).filter(file => !file.startsWith('.'));

    // Separate processed photo_*.jpg from raw source files
    const processedPhotos = files.filter(f => /^photo_\d+\.jpg$/i.test(f));
    const rawFiles = files.filter(f => !/^photo_\d+\.jpg$/i.test(f) && !f.toLowerCase().endsWith('.heic'));
    const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));

    // Combine HEIC and other raw files
    const filesToProcess = [...rawFiles, ...heicFiles];

    if (filesToProcess.length > 0) {
      // Sort raw files numerically/alphabetically so they get consistent mapping
      filesToProcess.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

      // Check if we need to convert anything. If processed count matches raw count, skip the loop.
      if (processedPhotos.length >= filesToProcess.length) {
        console.log(`Gallery "${galleryKey}" is already fully converted (${processedPhotos.length} JPEGs). Skipping conversion.`);
      } else {
        filesToProcess.forEach((file, index) => {
          const srcPath = path.join(dirPath, file);
          const sequenceNumber = index + 1;
          const normalizedName = `photo_${sequenceNumber}.jpg`;
          const destPath = path.join(dirPath, normalizedName);

          if (!fs.existsSync(destPath)) {
            console.log(`Converting ${file} -> ${normalizedName}...`);
            try {
              // Use sips to convert, resize to max 1400px, and compress to quality 85
              execSync(`/usr/bin/sips -s format jpeg -s formatOptions 85 -Z 1400 "${srcPath}" --out "${destPath}"`, {
                stdio: 'inherit'
              });
              console.log(`Successfully converted ${file} to ${normalizedName}`);
              
              // Only delete non-HEIC raw files (to keep raw HEIC files on disk but clean up uploaded JPEGs)
              if (!file.toLowerCase().endsWith('.heic')) {
                fs.unlinkSync(srcPath);
                console.log(`Deleted raw source file: ${file}`);
              }
            } catch (err) {
              console.error(`Failed to convert ${file}:`, err.message);
            }
          } else {
            console.log(`Skipping conversion: ${normalizedName} already exists.`);
            // If the raw file is not HEIC and the JPEG already exists, we can clean up the raw file
            if (!file.toLowerCase().endsWith('.heic') && fs.existsSync(destPath)) {
              try {
                fs.unlinkSync(srcPath);
                console.log(`Cleaned up duplicate raw source file: ${file}`);
              } catch (e) {}
            }
          }
        });
      }
    }

    // Re-read files in directory to construct the final list of photos for this gallery
    const finalFiles = fs.readdirSync(dirPath)
      .filter(file => /^photo_\d+\.jpg$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    finalFiles.forEach(file => {
      const match = file.match(/^photo_(\d+)\.jpg$/i);
      const sequenceNumber = match ? match[1] : '0';
      photoList.push({
        src: `/gallery/${galleryKey}/${file}`,
        alt: `${galleryKey.replace('-', ' ')} photo ${sequenceNumber}`,
        name: file,
        gallery: galleryKey
      });
    });
  });

  // Generate lib/photography.ts
  console.log(`\nGenerating metadata file at ${OUTPUT_TS}...`);
  if (!fs.existsSync(LIB_DIR)) {
    fs.mkdirSync(LIB_DIR, { recursive: true });
  }

  const fileContent = `// This file is auto-generated by scripts/process-images.js. Do not edit manually.

export interface Photo {
  src: string
  alt: string
  name: string
  gallery: string
}

export const photos: Photo[] = ${JSON.stringify(photoList, null, 2)};
`;

  fs.writeFileSync(OUTPUT_TS, fileContent, 'utf-8');
  console.log(`Done! Registered ${photoList.length} photos.`);
}

processImages();
