import React from 'react';
import { Button } from '../components/Button';
import type { Page } from '../App';

interface LoginPageProps {
    onNavigate: (page: Page) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFF9F5] flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center max-w-md">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Welcome Back!</h1>
            <p className="mt-3 text-[#5A6A78]">
                Log in to manage your bookings and connect with photographers.
            </p>
        
            <div className="mt-8 bg-white p-8 rounded-2xl border border-gray-200/80 text-left shadow-lg">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50]">Email Address</label>
                        <input type="email" id="email" className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                     <div>
                        <label htmlFor="password-login" className="block text-sm font-medium text-[#2C3E50]">Password</label>
                        <input type="password" id="password-login" className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                    <Button className="w-full text-lg !py-3 font-bold">
                        Log In
                    </Button>
                </div>
                 <p className="text-center text-sm text-[#5A6A78] mt-6">
                    Don't have an account?{' '}
                    <span onClick={() => onNavigate('signup')} className="font-semibold text-[#FF7D6B] hover:text-[#E86A5A] cursor-pointer">
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    </div>
  );
};