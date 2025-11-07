import React from 'react';
import { Button } from './Button';
import type { Page } from '../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  moodBoardCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, moodBoardCount }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <h1 className="text-2xl font-bold text-[#2C3E50] tracking-tight">
              Frame<span className="text-[#FF7D6B]">NL</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => onNavigate('home')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">Home</a>
            <a onClick={() => onNavigate('search')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">Find a Photographer</a>
            <a onClick={() => onNavigate('moodBoard')} className="relative font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">
              Mood Board
              {moodBoardCount > 0 && (
                <span className="absolute -top-1 -right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7D6B] text-xs font-bold text-white">
                  {moodBoardCount}
                </span>
              )}
            </a>
            <a onClick={() => onNavigate('photographerDashboard')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">For Photographers</a>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" onClick={() => onNavigate('login')}>Log In</Button>
            <Button variant="primary" onClick={() => onNavigate('signup')}>Sign Up</Button>
          </div>
          <div className="md:hidden">
            <button className="text-[#5A6A78] hover:text-[#FF7D6B] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};