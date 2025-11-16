
import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { StructuredData } from '../components/StructuredData';
import { useTranslation } from '../hooks/useTranslation';

export const AboutUsPage: React.FC = () => {
    const { t } = useTranslation();
    useSeo({
        title: 'About Us | framenl',
        description: "Learn about framenl's mission to connect clients with talented photographers across the Netherlands and empower creative careers."
    });

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "framenl",
        "url": "https://framenl-app.com",
        "logo": "https://framenl-app.com/logo.png",
        "description": "framenl is a marketplace connecting clients with professional photographers in the Netherlands.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amsterdam",
            "addressCountry": "NL"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@framenl.com"
        }
    };

  return (
    <div className="bg-white">
      <StructuredData data={organizationSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('About_Title')}</h1>
                <p className="mt-4 text-2xl text-[#5A6A78] leading-snug">
                    {t('About_Subtitle')}
                </p>
            </header>
            
            <div className="text-lg text-[#5A6A78] space-y-6 leading-relaxed">
                <p>
                    {t('About_P1')}
                </p>
                <p>
                    {t('About_P2')}
                </p>
                <p>
                    {t('About_P3')}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
