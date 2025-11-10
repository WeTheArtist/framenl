
import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { StructuredData } from '../components/StructuredData';

export const AboutUsPage: React.FC = () => {
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
                <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Our Mission</h1>
                <p className="mt-4 text-2xl text-[#5A6A78] leading-snug">
                    To make it effortless to find and book talented photographers, empowering creatives to build sustainable careers doing what they love.
                </p>
            </header>
            
            <div className="text-lg text-[#5A6A78] space-y-6 leading-relaxed">
                <p>
                    framenl was born from a simple idea: the best photographers should be easy to find. In a country as rich with creativity as the Netherlands, we saw a gap between clients seeking high-quality photography and the artists ready to create it.
                </p>
                <p>
                    We are a small, passionate team based in Amsterdam, dedicated to building a platform that is beautiful, functional, and fair. For clients, we offer a curated, user-friendly experience with transparent pricing. For photographers, we provide the tools to showcase their work, manage their business, and connect with a steady stream of clients without the hassle of marketing.
                </p>
                <p>
                    Our goal is to celebrate the art of photography and the incredible talent across this country. Thank you for being a part of our community.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};