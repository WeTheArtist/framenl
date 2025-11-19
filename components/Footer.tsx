
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
    <footer className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
               <div className="bg-[#FF7D6B] text-white p-1 rounded-lg">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
               </div>
               <span className="text-3xl font-bold text-white tracking-tight font-['Caveat']">framenl</span>
            </div>
            <p className="text-sm text-slate-400">{t('Footer_Slogan')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-slate-200">{t('Footer_Explore')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
                <FooterLink page="search" onNavigate={onNavigate}>{t('Footer_FindPhotographers')}</FooterLink>
                <FooterLink page="howItWorks" onNavigate={onNavigate}>{t('Footer_HowItWorks')}</FooterLink>
                <FooterLink page="trustAndSafety" onNavigate={onNavigate}>{t('Footer_TrustAndSafety')}</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-slate-200">{t('Footer_ForPhotographers')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
                <FooterLink page="photographerDashboard" onNavigate={onNavigate}>{t('Footer_JoinCommunity')}</FooterLink>
                <FooterLink page="pricing" onNavigate={onNavigate}>{t('Footer_Pricing')}</FooterLink>
                <FooterLink page="resources" onNavigate={onNavigate}>{t('Footer_Resources')}</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-slate-200">{t('Footer_Company')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
                <FooterLink page="about" onNavigate={onNavigate}>{t('Footer_AboutUs')}</FooterLink>
                <FooterLink page="contact" onNavigate={onNavigate}>{t('Footer_Contact')}</FooterLink>
                <FooterLink page="careers" onNavigate={onNavigate}>{t('Footer_Careers')}</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} framenl. {t('Footer_AllRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};
