import React from 'react';

interface WaitlistBannerProps {
  onClose: () => void;
}

export const WaitlistBanner: React.FC<WaitlistBannerProps> = ({ onClose }) => {
  return (
    <div className="sticky top-24 z-40 bg-orange-200 border-b border-orange-300 text-center p-5 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E86A5A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <p className="font-semibold text-lg text-[#2C3E50] ml-4">
            Interested in the real framenl? Show your interest and Join our{' '}
            <a
              href="https://tally.so/r/Ekzplr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#E86A5A] transition-colors font-bold"
            >
              waitlist
            </a>
            !
          </p>
        </div>
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-1/2 -translate-y-1/2 right-4 text-orange-800/70 hover:text-orange-800"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};