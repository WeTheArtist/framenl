import React from 'react';
import { Button } from '../components/Button';
import { useSeo } from '../hooks/useSeo';

export const ContactPage: React.FC = () => {
  useSeo({
    title: 'Contact Us | InFramenI',
    description: "Get in touch with the InFramenI team. We're here to help with any questions, feedback, or support requests you may have."
  });

  return (
    <div className="bg-[#FFF9F5] flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Get In Touch</h1>
            <p className="mt-3 text-lg text-[#5A6A78]">
                Have a question, feedback, or need support? We'd love to hear from you.
            </p>
        
            <div className="mt-8 bg-white p-8 rounded-2xl border border-gray-200/80 text-left shadow-lg">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name-contact" className="block text-sm font-medium text-[#2C3E50]">Your Name</label>
                            <input type="text" id="name-contact" className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                        </div>
                         <div>
                            <label htmlFor="email-contact" className="block text-sm font-medium text-[#2C3E50]">Your Email</label>
                            <input type="email" id="email-contact" className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="subject-contact" className="block text-sm font-medium text-[#2C3E50]">Subject</label>
                        <input type="text" id="subject-contact" className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                     <div>
                        <label htmlFor="message-contact" className="block text-sm font-medium text-[#2C3E50]">Message</label>
                        <textarea id="message-contact" rows={5} className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]"></textarea>
                    </div>
                    <div className="text-right">
                        <Button type="submit" className="text-lg !py-3 px-8 font-bold">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};