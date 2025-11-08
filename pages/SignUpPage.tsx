
import React, { useState } from 'react';
import { Button } from '../components/Button';
import type { Page } from '../App';

interface SignUpPageProps {
    onNavigate: (page: Page) => void;
    onSignUp: (name: string) => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate, onSignUp }) => {
  const [name, setName] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
        onSignUp(name.trim());
    }
  };

  return (
    <div className="bg-[#FFF9F5] flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center max-w-md">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Join InFramenI</h1>
            <p className="mt-3 text-[#5A6A78]">
                Sign up to find and book the best photographers in the Netherlands.
            </p>
        
            <form onSubmit={handleSignUp} className="mt-8 bg-white p-8 rounded-2xl border border-gray-200/80 text-left shadow-lg">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name-signup" className="block text-sm font-medium text-[#2C3E50]">Full Name</label>
                        <input 
                            type="text" 
                            id="name-signup" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                    <div>
                        <label htmlFor="email-signup" className="block text-sm font-medium text-[#2C3E50]">Email Address</label>
                        <input type="email" id="email-signup" required className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                     <div>
                        <label htmlFor="password-signup" className="block text-sm font-medium text-[#2C3E50]">Password</label>
                        <input type="password" id="password-signup" required className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                    <Button type="submit" className="w-full text-lg !py-3 font-bold">
                        Create Account
                    </Button>
                </div>
                 <p className="text-center text-sm text-[#5A6A78] mt-6">
                    Already have an account?{' '}
                    <span onClick={() => onNavigate('login')} className="font-semibold text-[#FF7D6B] hover:text-[#E86A5A] cursor-pointer">
                        Log in
                    </span>
                </p>
            </form>
        </div>
    </div>
  );
};