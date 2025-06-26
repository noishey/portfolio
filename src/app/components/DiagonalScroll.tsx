'use client';

import SubstackWidget from './SubstackWidget';

const DiagonalScroll = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 transform -skew-y-6 origin-top-left scale-150"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stay Connected
          </h2>
          
          {/* Substack logo */}
          <div className="flex justify-center mb-6">
            <svg 
              viewBox="0 0 24 24" 
              className="w-12 h-12 text-orange-600" 
              fill="currentColor"
            >
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Get weekly insights on AI, iOS, green tech, and more
          </p>
          
          {/* SubstackWidget positioned within the diagonal section */}
          <div className="relative">
            <SubstackWidget />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default DiagonalScroll; 