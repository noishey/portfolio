'use client';

import Image from 'next/image';

const Card = () => {
  const text = "into ai, iOS, green tech, finance, fitness, spirituality and more.";

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center gap-4">
      <h2 className="text-5xl font-bold text-white">
        hey 👋 i&apos;m noishey
      </h2>
      <h1 className="text-2xl font-mono text-white">
        {text}
      </h1>

      {/* X (Twitter) icon */}
      <a
        className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
        href="https://x.com/butn0tshy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center justify-center w-12 h-12">
          <Image src="/x.png" alt="X" width={40} height={40} />
        </span>
      </a>

      {/* LinkedIn icon */}
      <a
        className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
        href="https://linkedin.com/in/noishey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center justify-center w-12 h-12">
          <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
        </span>
      </a>
    </div>
  );
};

export default Card; 