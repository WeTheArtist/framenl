
import React, { useState } from 'react';
import { Button } from './Button';

interface WaitlistBannerProps {
  onClose: () => void;
}

export const WaitlistBanner: React.FC<WaitlistBannerProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [social, setSocial] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // The user requested to "Send this to me or save it somewhere so i can retrieve the list."
    // As there is no backend, console.logging is the best way to "save" it for the developer to retrieve.
    console.log("--- New Waitlist Submission ---");
    console.log({
      timestamp: new Date().toISOString(),
      name,
      email,
      social,
    });
    console.log("-------------------------------");
    
    setIsSubmitted(true);
  };

  return (
    <div className="bg-orange-100/80 border-b border-orange-200/80 text-center p-4 relative transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <p className="font-bold text-sm text-[#2C3E50]">
                <span className="bg-[#FF7D6B] text-white text-xs font-bold px-2 py-1 rounded-md mr-2">DEMO</span>
                Interested in the real InFramenI? Join our waitlist!
              </p>
            </div>
            <div className="flex-grow w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full text-sm rounded-md border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] py-2"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full text-sm rounded-md border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] py-2"
              />
              <input 
                type="text" 
                placeholder="Social Media (Optional)"
                value={social}
                onChange={e => setSocial(e.target.value)} 
                className="w-full text-sm rounded-md border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] py-2"
              />
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Button type="submit" variant="primary" className="!px-4 !py-2 text-sm w-full">Join Waitlist</Button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 h-[40px]">
             <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="font-semibold text-green-800">
              Thanks for joining! We'll be in touch soon.
            </p>
          </div>
        )}
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
