
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const JobOpening: React.FC<{ title: string, location: string, type: string }> = ({ title, location, type }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 flex items-center justify-between">
            <div>
                <h3 className="font-semibold text-lg text-[#2C3E50]">{title}</h3>
                <p className="text-sm text-[#5A6A78] mt-1">{location} &bull; {type}</p>
            </div>
            <button className="text-sm font-semibold text-[#FF7D6B] hover:text-[#E86A5A]">{t('Careers_ViewDetails')}</button>
        </div>
    );
}


export const CareersPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('Careers_Title')}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                {t('Careers_Subtitle')}
            </p>
        </header>

         <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[#2C3E50]">{t('Careers_Openings')}</h2>
            <div className="space-y-4">
                <JobOpening title="Senior Frontend Engineer (React)" location="Amsterdam / Remote" type="Full-time" />
                <JobOpening title="Lead Product Designer (UX/UI)" location="Amsterdam" type="Full-time" />
                <JobOpening title="Photographer Community Manager" location="Amsterdam" type="Part-time" />
            </div>
            <div className="mt-12 text-center bg-[#FFF9F5] p-8 rounded-2xl">
                 <h3 className="font-semibold text-xl text-[#2C3E50]">{t('Careers_NoRole')}</h3>
                 <p className="text-[#5A6A78] mt-2">{t('Careers_NoRole_Desc', {email: ''})}<a href="mailto:careers@framenl.com" className="text-[#FF7D6B] font-medium hover:text-[#E86A5A]">careers@framenl.com</a>.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
