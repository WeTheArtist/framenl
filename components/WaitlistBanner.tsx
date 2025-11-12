import React from 'react';

interface WaitlistBannerProps {
  onClose: () => void;
}

export const WaitlistBanner: React.FC<WaitlistBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-orange-100/80 border-b border-orange-200/80 text-center p-4 relative transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-bold text-sm text-[#2C3E50]">
          <span className="bg-[#FF7D6B] text-white text-xs font-bold px-2 py-1 rounded-md mr-2">DEMO</span>
          Interested in the real framenl? Show your interest and Join our{' '}
          <a
            href="https://tally.so/r/Ekzplr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#FF7D6B] transition-colors"
          >
            waitlist
          </a>
          !
        </p>
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-1/2 -translate-y-1/2 right-4 text-[#E86A5A]/70 hover:text-[#E86A5A]"
        aria-label="Dismiss banner"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
