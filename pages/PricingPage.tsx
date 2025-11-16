
import React from 'react';
import { Button } from '../components/Button';
import { useTranslation } from '../hooks/useTranslation';

export const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FFF9F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('Pricing_Title')}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                {t('Pricing_Subtitle')}
            </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl border border-gray-200/80 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-[#2C3E50]">{t('Pricing_Card_Title')}</h2>
            <p className="text-6xl font-extrabold my-4 text-[#2C3E50]">15%</p>
            <p className="text-[#5A6A78]">
                {t('Pricing_Card_Desc')}
            </p>
            <ul className="text-left my-8 space-y-3 text-[#5A6A78]">
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#FF7D6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('Pricing_Feature1')}</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#FF7D6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('Pricing_Feature2')}</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#FF7D6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('Pricing_Feature3')}</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#FF7D6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('Pricing_Feature4')}</li>
            </ul>
            <Button className="w-full text-lg !py-3 font-bold">{t('Pricing_Button')}</Button>
        </div>
      </div>
    </div>
  );
};
