
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import type { Page } from '../App';
import type { User } from '../types';
import { ChevronDownIcon } from './IconComponents';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';

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
    const { t } = useTranslation();

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
    <header className="relative bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-8xl font-black text-gray-200/50 opacity-50 transform -rotate-12 select-none">
                DEMO
            </span>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center gap-2" title="framenl Home">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#2C3E50]">
                    <title>framenl Logo</title>
                    <rect x="10" y="10" width="80" height="80" rx="15" ry="15" stroke="currentColor" strokeWidth="12" fill="none" />
                    <circle cx="50" cy="50" r="12" fill="#FF7D6B" />
                </svg>
                <span className="font-brand text-4xl font-bold text-[#2C3E50] pt-2">framenl</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => onNavigate('home')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">{t('Header_Home')}</a>
            <a onClick={() => onNavigate('search')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">{t('Header_FindPhotographer')}</a>
            {user && (
                 <a onClick={() => onNavigate('moodBoard')} className="relative font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">
                    {t('Header_MoodBoard')}
                    {moodBoardCount > 0 && (
                        <span className="absolute -top-1 -right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7D6B] text-xs font-bold text-white">
                        {moodBoardCount}
                        </span>
                    )}
                </a>
            )}
            <a onClick={() => onNavigate('photographerDashboard')} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer transition-colors">{t('Header_ForPhotographers')}</a>
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
                                {t('Header_MyBookings')}
                            </a>
                             <a 
                                onClick={() => handleDropdownNavigate('messages')} 
                                className="block px-4 py-2 text-sm text-[#5A6A78] hover:bg-orange-50/50 hover:text-[#E86A5A] cursor-pointer"
                            >
                                {t('Header_Messages')}
                            </a>
                            <div className="border-t my-1 border-gray-200/80"></div>
                            <a 
                                onClick={handleDropdownLogout} 
                                className="block w-full text-left px-4 py-2 text-sm text-[#5A6A78] hover:bg-orange-50/50 hover:text-[#E86A5A] cursor-pointer"
                            >
                                {t('Header_Logout')}
                            </a>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Button variant="ghost" onClick={() => onNavigate('login')}>{t('Header_Login')}</Button>
                    <Button variant="primary" onClick={() => onNavigate('signup')}>{t('Header_SignUp')}</Button>
                </>
            )}
             <div className="border-l border-gray-200/80 h-8 mx-2"></div>
             <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#5A6A78] hover:text-[#FF7D6B] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
             <a onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">{t('Header_Home')}</a>
            <a onClick={() => { onNavigate('search'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">{t('Header_FindPhotographer')}</a>
             {user && <a onClick={() => { onNavigate('moodBoard'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">{t('Header_MoodBoard')}</a>}
            {user && <a onClick={() => { onNavigate('userDashboard'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">{t('Header_MyBookings')}</a>}
            {user && <a onClick={() => { onNavigate('messages'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">{t('Header_Messages')}</a>}
            <a onClick={() => { onNavigate('photographerDashboard'); setIsMenuOpen(false); }} className="font-medium text-[#5A6A78] hover:text-[#FF7D6B] cursor-pointer">{t('Header_ForPhotographers')}</a>
            <hr/>
            <div className="flex flex-col space-y-2">
                 {user ? (
                    <>
                        <span className="text-sm text-center text-[#5A6A78]">{t('Header_Welcome')}, {user.name}!</span>
                        <Button variant="ghost" onClick={() => { onLogout(); setIsMenuOpen(false); }}>{t('Header_Logout')}</Button>
                    </>
                ) : (
                    <>
                        <Button variant="ghost" onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}>{t('Header_Login')}</Button>
                        <Button variant="primary" onClick={() => { onNavigate('signup'); setIsMenuOpen(false); }}>{t('Header_SignUp')}</Button>
                    </>
                )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
