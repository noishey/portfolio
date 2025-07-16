import Scene from './components/Scene';
import Image from 'next/image';
import SubstackWidget from './components/SubstackWidget';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main content section */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      {/* Social icons vertical bar */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-6 z-50">
        <a
          className="flex items-center justify-center hover:underline hover:underline-offset-4"
          href="https://x.com/butn0tshy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-10 w-10 fill-current"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          className="flex items-center justify-center hover:underline hover:underline-offset-4"
          href="https://github.com/noishey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-10 w-10 fill-white dark:fill-white"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>
        <a
          className="flex items-center justify-center hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/noishey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-10 w-10 fill-white dark:fill-white"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        {/* Bento link below socials */}
        <a
          className="flex items-center justify-center hover:underline hover:underline-offset-4"
          href="https://bento.me/noishey"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1f36b4' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10"
            style={{ color: '#1f36b4' }}
          >
            <circle cx="12" cy="12" r="10" fill="#1f36b4" />
            <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white">b</text>
          </svg>
        </a>
      </div>
      <div className="fixed top-4 left-4 z-50 flex flex-col items-center w-32">
          <Image src="/avatar.png" alt="Avatar" width={128} height={128} className="w-32 h-32 rounded" />
          <div className="mt-4 w-full flex flex-col items-center">
            <h1
              className="text-xl md:text-2xl font-mono text-gray-400 text-center tracking-widest leading-tight"
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                textShadow: '0 0 1px #222, 0 0 2px #222',
                imageRendering: 'pixelated',
                filter: 'contrast(180%)',
              }}
            >
              reduce the noise<br />and tune in
            </h1>
          </div>
      </div>
      <Scene />
      {/* Newsletter subscribe section below 3D object */}
      <div className="flex flex-col items-center justify-center mt-16 z-30">
        <h2 className="text-lg md:text-2xl font-mono text-gray-300 mb-4 tracking-wide" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
          Subscribe to my Newsletter
        </h2>
        <div className="w-full max-w-md">
          <SubstackWidget />
        </div>
      </div>
      {/* <Card /> */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Social icons moved to right bar */}
      </footer>
      {/* Buy Me a Coffee floating button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://buymeacoffee.com/noishey"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 rounded-xl bg-white/10 border border-white/20 shadow-md backdrop-blur-md hover:bg-white/20 transition-colors text-xs font-medium"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="3" width="12" height="2" fill="currentColor"/>
            <polygon points="7,5 17,5 15.5,19 8.5,19" fill="currentColor"/>
            <rect x="7" y="9" width="10" height="3" fill="#fff"/>
          </svg>
        </a>
      </div>
      </div>
      
      {/* Diagonal scroll section */}
      {/* <DiagonalScroll /> */}
    </div>
  );
}
