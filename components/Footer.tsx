
import React from 'react';
import type { Page } from '../App';
import { useTranslation } from '../hooks/useTranslation';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page; onNavigate: (page: Page) => void; children: React.ReactNode }> = ({ page, onNavigate, children }) => (
    <li>
        <span onClick={() => onNavigate(page)} className="cursor-pointer hover:text-[#FF7D6B] transition-colors">{children}</span>
    </li>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white">
                   <title>framenl Logo</title>
                   <rect x="10" y="10" width="80" height="80" rx="15" ry="15" stroke="currentColor" strokeWidth="12" fill="none" />
                   <circle cx="50" cy="50" r="12" fill="#FF7D6B" />
               </svg>
               <span className="font-brand text-4xl font-bold text-white pt-2">framenl</span>
            </div>
            <p className="text-sm text-gray-300">{t('Footer_Slogan')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('Footer_Explore')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <FooterLink page="search" onNavigate={onNavigate}>{t('Footer_FindPhotographers')}</FooterLink>
                <FooterLink page="howItWorks" onNavigate={onNavigate}>{t('Footer_HowItWorks')}</FooterLink>
                <FooterLink page="trustAndSafety" onNavigate={onNavigate}>{t('Footer_TrustAndSafety')}</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('Footer_ForPhotographers')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <FooterLink page="photographerDashboard" onNavigate={onNavigate}>{t('Footer_JoinCommunity')}</FooterLink>
                <FooterLink page="pricing" onNavigate={onNavigate}>{t('Footer_Pricing')}</FooterLink>
                <FooterLink page="resources" onNavigate={onNavigate}>{t('Footer_Resources')}</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('Footer_Company')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <FooterLink page="about" onNavigate={onNavigate}>{t('Footer_AboutUs')}</FooterLink>
                <FooterLink page="contact" onNavigate={onNavigate}>{t('Footer_Contact')}</FooterLink>
                <FooterLink page="careers" onNavigate={onNavigate}>{t('Footer_Careers')}</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} framenl. {t('Footer_AllRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};
