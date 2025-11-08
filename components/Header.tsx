
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import type { Page } from '../App';
import type { User } from '../types';
import { ChevronDownIcon } from './IconComponents';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  moodBoardCount: number;
  user: User | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, moodBoardCount, user, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownNavigate = (page: Page) => {
        onNavigate(page);
        setIsDropdownOpen(false);
    };

    const handleDropdownLogout = () => {
        onLogout();
        setIsDropdownOpen(false);
    }

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <h1 className="text-2xl font-bold text-[#2C3E50] tracking-tight">
              In<span className="text-[#FF7D6B]">Frame</span>nI
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => onNavigate('home')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">Home</a>
            <a onClick={() => onNavigate('search')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">Find a Photographer</a>
            {user && (
                 <a onClick={() => onNavigate('moodBoard')} className="relative font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">
                    Mood Board
                    {moodBoardCount > 0 && (
                        <span className="absolute -top-1 -right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7D6B] text-xs font-bold text-white">
                        {moodBoardCount}
                        </span>
                    )}
                </a>
            )}
            <a onClick={() => onNavigate('photographerDashboard')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">For Photographers</a>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
                 <div className="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                        className="flex items-center space-x-1 text-sm font-medium text-[#5A6A78] hover:text-[#FF7D6B] p-2 rounded-md transition-colors"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                    >
                        <span>{user.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200/80">
                            <a 
                                onClick={() => handleDropdownNavigate('userDashboard')} 
                                className="block px-4 py-2 text-sm text-[#5A6A78] hover:bg-orange-50/50 hover:text-[#E86A5A] cursor-pointer"
                            >
                                My Bookings
                            </a>
                             <a 
                                onClick={() => handleDropdownNavigate('messages')} 
                                className="block px-4 py-2 text-sm text-[#5A6A78] hover:bg-orange-50/50 hover:text-[#E86A5A] cursor-pointer"
                            >
                                Messages
                            </a>
                            <div className="border-t my-1 border-gray-200/80"></div>
                            <a 
                                onClick={handleDropdownLogout} 
                                className="block w-full text-left px-4 py-2 text-sm text-[#5A6A78] hover:bg-orange-50/50 hover:text-[#E86A5A] cursor-pointer"
                            >
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Button variant="ghost" onClick={() => onNavigate('login')}>Log In</Button>
                    <Button variant="primary" onClick={() => onNavigate('signup')}>Sign Up</Button>
                </>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#5A6A78] hover:text-[#FF7D6B] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
             <a onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">Home</a>
            <a onClick={() => { onNavigate('search'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">Find a Photographer</a>
             {user && <a onClick={() => { onNavigate('moodBoard'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">Mood Board</a>}
            {user && <a onClick={() => { onNavigate('userDashboard'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">My Bookings</a>}
            {user && <a onClick={() => { onNavigate('messages'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">Messages</a>}
            <a onClick={() => { onNavigate('photographerDashboard'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">For Photographers</a>
            <hr/>
            <div className="flex flex-col space-y-2">
                 {user ? (
                    <>
                        <span className="text-sm text-center text-[#5A6A78]">Welcome, {user.name}!</span>
                        <Button variant="ghost" onClick={() => { onLogout(); setIsMenuOpen(false); }}>Log Out</Button>
                    </>
                ) : (
                    <>
                        <Button variant="ghost" onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}>Log In</Button>
                        <Button variant="primary" onClick={() => { onNavigate('signup'); setIsMenuOpen(false); }}>Sign Up</Button>
                    </>
                )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
