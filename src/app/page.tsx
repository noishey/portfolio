"use client";

import { motion } from "framer-motion";
import Cal from './components/Cal';
import Avatar from './components/AvatarFlip';

const sections = [
  { 
    id: "hero", 
    bg: "bg-gradient-to-br from-[#010101] to-black",
  },
  { 
    id: "hire", 
    bg: "bg-gradient-to-br from-[#010101] to-black", 
    title: "Cal + Hire Me" 
  },
  { 
    id: "projects", 
    bg: "bg-gradient-to-br from-[#010101] to-black", 
    title: "Projects" 
  },
  { 
    id: "substack", 
    bg: "bg-gradient-to-br from-[#010101] to-black", 
    title: "" 
  },
  { 
    id: "music", 
    bg: "bg-gradient-to-br from-[#010101] to-black", 
    title: "noisheymusic" 
  },
];


export default function Home() {
  return (
    <main className="relative flex">
      {/* Main Scroll Area */}
      <div className="snap-y snap-mandatory h-screen w-full overflow-scroll scroll-smooth">
        {sections.map((section, i) => (
          <motion.section
            key={section.id}
            className={`snap-start h-screen flex items-center justify-center text-white ${section.bg}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
            style={{
              clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
            }}
  >
{section.id === "hero" ? (
  <Avatar 
        defaultImage="/avatar.png"
        hoverImage="/headshot.jpeg"
        alt="Arjun Shenoy"
        size={120}
      />
) : 
 section.id === "hire" ? (
  // Hire Me split layout
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full h-full px-10">
    {/* Left: Cal booking */}
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
      <Cal />
    </div>
  </div>
) : section.id === "projects" ? (
  // Projects grid
  <div className="w-full h-full px-10 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {[1, 2, 3].map((p) => (
        <motion.div
          key={p}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="bg-white/10 rounded-2xl p-6 shadow-lg cursor-pointer backdrop-blur-md"
        >
          <h2 className="text-xl font-bold mb-2">Project {p}</h2>
          <p className="text-sm opacity-80">
            Short description about project {p}.
          </p>
        </motion.div>
      ))}
    </div>
  </div>
) : section.id === "substack" ? (
  // Substack signup embed
  <div className="flex flex-col items-center justify-center w-full h-full px-10">
    <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md w-full max-w-lg"
    >
      <iframe
        src="https://yourname.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: "0", background: "transparent" }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </motion.div>
  </div>
) : section.id === "music" ? (
  // Music links (Instagram + SoundCloud)
  <div className="flex flex-col items-center justify-center w-full h-full px-10 space-y-6">
    <h2 className="text-3xl font-bold mb-6">{section.title}</h2>

    <a
      className="flex items-center justify-center hover:underline hover:underline-offset-4"
      href="https://instagram.com/noisheymusic"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5.25 2A4.25 4.25 0 1 0 15 12a4.25 4.25 0 0 0-4.25-4.25zm0 1.5A2.75 2.75 0 1 1 8.75 12a2.75 2.75 0 0 1 2.75-2.75z" />
      </svg>
    </a>

    <a
      className="flex items-center justify-center hover:underline hover:underline-offset-4"
      href="https://soundcloud.com/noishey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
    src="soundcloud.png" 
    alt="SoundCloud" 
    className="h-10 w-10"
  />
    </a>
  <div className="fixed bottom-8 right-8 z-50 background-color: transparent">
  <a href="https://buymeacoffee.com/noishey"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 px-3 py-3 rounded-xl bg-white/10 border border-white/20 shadow-md backdrop-blur-md hover:bg-white/20 transition-colors text-xs font-medium"
>
  <span className="mr-1 font-bold text-yellow">Buy Me A Coffee</span>
  <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="3" width="12" height="2" fill="#ffffff"/>
    <polygon points="7,5 17,5 15.5,19 8.5,19" fill="currentColor"/>
    <rect x="7" y="9" width="10" height="3" fill="#ffd300"/>
  </svg>
</a>
</div>
  </div>
) : (
  // Default fallback for hero, etc.
  <h1 className="text-4xl font-bold">{section.title}</h1>
)}

  </motion.section>
        ))}
      </div>

      {/* Social Sidebar (fixed on the right) */}
      <aside className="hidden md:flex flex-col gap-6 fixed right-6 top-1/3 text-white z-50">
  {/* Twitter/X */}
  <motion.a
  href="https://x.com/butn0tshy"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.2, rotate: 10 }}
  className="p-3 bg-yellow-700 rounded-full shadow-lg flex items-center justify-center"
>
  <img 
    src="twitter.png"   // ✅ replace this with your PNG file path
    alt="X" 
    width={24} 
    height={24} 
  />
</motion.a>


  {/* GitHub */}
  <motion.a
    href="https://github.com/noishey"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: -10 }}
    className="p-3 bg-yellow-700 rounded-full shadow-lg flex items-center justify-center"
  >
    <img 
    src="github.png"   // ✅ replace this with your PNG file path
    alt="gh" 
    width={24} 
    height={24} 
  />
  </motion.a>

  {/* Bento */}
  <motion.a
    href="https://bento.me/noishey"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.7, rotate: 10 }}
    className="p-3 bg-yellow-700 rounded-full shadow-lg flex items-center justify-center"
  >
    <img 
    src="bento.png"   // ✅ replace this with your PNG file path
    alt="gh" 
    width={34} 
    height={34} 
  />
  </motion.a>

  {/* LeetCode */}
  <motion.a
    href="https://leetcode.com/noishey"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: -10 }}
    className="p-3 bg-yellow-700 rounded-full shadow-lg flex items-center justify-center"
  >
    <img 
    src="leetcode.png"   // ✅ replace this with your PNG file path
    alt="gh" 
    width={34} 
    height={34} 
  />
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="https://linkedin.com/in/noishey"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 10 }}
    className="p-3 bg-yellow-700 rounded-full shadow-lg flex items-center justify-center"
  >
  <img 
    src="linkedin.png"   // ✅ replace this with your PNG file path
    alt="gh" 
    width={34} 
    height={34} 
  />  
  </motion.a>

  {/* Goodreads */}
  <motion.a
    href="https://goodreads.com/noishey"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: -10 }}
    className="p-3 bg-yellow-700 rounded-full shadow-lg flex items-center justify-center"
  >
  <img 
    src="goodreads.png"   // ✅ replace this with your PNG file path
    alt="gh" 
    width={34} 
    height={34} 
  /> 
  </motion.a>
</aside>

    </main>
  );
}
