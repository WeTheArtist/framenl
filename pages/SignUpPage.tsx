
import React, { useState } from 'react';
import { Button } from '../components/Button';
import type { Page } from '../App';
import type { User } from '../types';
import * as userService from '../services/userService';
import { GoogleAuthModal } from '../components/GoogleAuthModal';
import { useTranslation } from '../hooks/useTranslation';

interface SignUpPageProps {
    onNavigate: (page: Page) => void;
    onSignUp: (user: User) => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate, onSignUp }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);


  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
        setError(t('SignUpPage_PasswordError'));
        return;
    }

    try {
      const newUser = userService.registerUser({ name, email, password });
      onSignUp(newUser);
    } catch (err: any) {
        setError(t('SignUpPage_EmailExistsError'));
    }
  };

  const handleSelectGoogleAccount = (account: { name: string; email: string }) => {
    const googleUser = userService.handleGoogleSignIn(account);
    setIsGoogleModalOpen(false);
    onSignUp(googleUser);
  };

  return (
    <>
    <div className="bg-[#FFF9F5] flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-md">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('SignUpPage_Title')}</h1>
            <p className="mt-3 text-[#5A6A78]">
                {t('SignUpPage_Subtitle')}
            </p>
        
            <div className="mt-8 bg-white p-8 rounded-2xl border border-gray-200/80 text-left shadow-lg">
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>
                        <label htmlFor="name-signup" className="block text-sm font-medium text-[#2C3E50]">{t('SignUpPage_NameLabel')}</label>
                        <input 
                            type="text" 
                            id="name-signup" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                    <div>
                        <label htmlFor="email-signup" className="block text-sm font-medium text-[#2C3E50]">{t('LoginPage_EmailLabel')}</label>
                        <input 
                            type="email" 
                            id="email-signup" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                     <div>
                        <label htmlFor="password-signup" className="block text-sm font-medium text-[#2C3E50]">{t('LoginPage_PasswordLabel')}</label>
                        <input 
                            type="password" 
                            id="password-signup" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className="mt-1 w-full px-4 py-3 rounded-lg border-gray-300 bg-white focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <Button type="submit" className="w-full text-lg !py-3 font-bold">
                        {t('SignUpPage_CreateAccountButton')}
                    </Button>
                </form>

                 <div className="mt-6 flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-sm text-gray-500">{t('LoginPage_Or')}</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <Button variant="secondary" onClick={() => setIsGoogleModalOpen(true)} className="w-full mt-6 !font-semibold !bg-white border border-gray-300 !text-[#2C3E50] hover:!bg-gray-50">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.657-11.303-8.591l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C41.389 36.197 44 30.651 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                    {t('LoginPage_GoogleButton')}
                </Button>

                 <p className="text-center text-sm text-[#5A6A78] mt-6">
                    {t('SignUpPage_HaveAccount')}{' '}
                    <span onClick={() => onNavigate('login')} className="font-semibold text-[#FF7D6B] hover:text-[#E86A5A] cursor-pointer">
                        {t('SignUpPage_LoginLink')}
                    </span>
                </p>
            </div>
        </div>
    </div>
    <GoogleAuthModal
        isOpen={isGoogleModalOpen}
        onClose={() => setIsGoogleModalOpen(false)}
        onSelectAccount={handleSelectGoogleAccount}
    />
    </>
  );
};
