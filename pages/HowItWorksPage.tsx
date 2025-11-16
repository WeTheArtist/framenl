
import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { StructuredData } from '../components/StructuredData';
import { useTranslation } from '../hooks/useTranslation';

const Step: React.FC<{ number: string, title: string, children: React.ReactNode}> = ({number, title, children}) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-lg">
        <span className="text-4xl font-bold text-[#FF7D6B]">{number}</span>
        <h3 className="mt-4 text-2xl font-bold text-[#2C3E50]">{title}</h3>
        <p className="mt-2 text-[#5A6A78]">{children}</p>
    </div>
);

export const HowItWorksPage: React.FC = () => {
  const { t } = useTranslation();
  useSeo({
    title: 'How It Works | framenl',
    description: 'Learn how to easily find, book, and connect with professional photographers on framenl in just three simple steps.'
  });

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book a Photographer on framenl",
    "step": [{
      "@type": "HowToStep",
      "name": "Search & Discover",
      "text": "Use our powerful search and filters to browse profiles of talented photographers. Compare portfolios, specialties, and pricing instantly."
    },{
      "@type": "HowToStep",
      "name": "Request to Book",
      "text": "Found the one? Select a date and package, and send a booking request directly to the photographer. You'll get a confirmation quickly."
    },{
      "@type": "HowToStep",
      "name": "Capture the Moment",
      "text": "Coordinate with your photographer, have an amazing photoshoot, and receive your beautiful photos. It's that simple!"
    }]
  };

  return (
    <div className="bg-[#FFF9F5]">
      <StructuredData data={howToSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('HowItWorks_Title')}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                {t('HowItWorks_Subtitle')}
            </p>
        </header>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Step number="01" title={t('HowItWorks_Step1_Title')}>
                {t('HowItWorks_Step1_Desc')}
            </Step>
            <Step number="02" title={t('HowItWorks_Step2_Title')}>
                {t('HowItWorks_Step2_Desc')}
            </Step>
            <Step number="03" title={t('HowItWorks_Step3_Title')}>
                {t('HowItWorks_Step3_Desc')}
            </Step>
        </div>
      </div>
    </div>
  );
};
