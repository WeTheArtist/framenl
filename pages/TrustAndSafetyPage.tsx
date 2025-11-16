
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const InfoCard: React.FC<{ title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/80">
        <h3 className="text-xl font-semibold text-[#2C3E50]">{title}</h3>
        <p className="mt-2 text-[#5A6A78]">{children}</p>
    </div>
);

export const TrustAndSafetyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('TrustAndSafety_Title')}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                {t('TrustAndSafety_Subtitle')}
            </p>
        </header>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard title={t('TrustAndSafety_Card1_Title')}>
                {t('TrustAndSafety_Card1_Desc')}
            </InfoCard>
             <InfoCard title={t('TrustAndSafety_Card2_Title')}>
                {t('TrustAndSafety_Card2_Desc')}
            </InfoCard>
             <InfoCard title={t('TrustAndSafety_Card3_Title')}>
                {t('TrustAndSafety_Card3_Desc')}
            </InfoCard>
             <InfoCard title={t('TrustAndSafety_Card4_Title')}>
                {t('TrustAndSafety_Card4_Desc')}
            </InfoCard>
        </div>
      </div>
    </div>
  );
};
