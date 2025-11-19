
import React, { useState } from 'react';
import type { Photographer } from '../types';
import { CATEGORIES, TESTIMONIALS } from '../constants';
import { PhotographerCard } from '../components/PhotographerCard';
import { Button } from '../components/Button';
import { StarIcon } from '../components/IconComponents';
import { useSeo } from '../hooks/useSeo';
import { StructuredData } from '../components/StructuredData';
import { useTranslation } from '../hooks/useTranslation';

interface HomePageProps {
  photographers: Photographer[];
  onSearch: (query: string) => void;
  onViewProfile: (photographer: Photographer) => void;
}

const Hero: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const { t } = useTranslation();
    
    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
      <div className="relative bg-[#0F172A] text-white min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            {t('HomePage_Hero_Title')}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
            {t('HomePage_Hero_Subtitle')}
          </p>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-row gap-2 items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('HomePage_Hero_Placeholder')}
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 bg-transparent border-0 focus:ring-0 placeholder-gray-400 text-base sm:text-lg"
              />
              <Button onClick={handleSearch} className="flex-shrink-0 px-6 !py-3 text-base sm:text-lg rounded-lg whitespace-nowrap">
                {t('HomePage_Hero_SearchButton')}
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-400">Trusted by leading Dutch companies.</p>
          </div>
        </div>
      </div>
    );
};

const FeaturedPhotographers: React.FC<{ photographers: Photographer[], onViewProfile: (photographer: Photographer) => void }> = ({ photographers, onViewProfile }) => {
    const { t } = useTranslation();
    return (
        <div className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-center text-[#0F172A]">{t('HomePage_Featured_Title')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-[#64748B]">
                {t('HomePage_Featured_Subtitle')}
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {photographers.slice(0, 3).map(p => (
                <PhotographerCard key={p.id} photographer={p} onViewProfile={onViewProfile} />
                ))}
            </div>
            </div>
        </div>
    );
};

const Categories: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
    const { t } = useTranslation();
    return (
        <div className="py-16 sm:py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-center text-[#0F172A]">{t('HomePage_Categories_Title')}</h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {CATEGORIES.map(category => (
                <div key={category.name} onClick={onNavigate} className="relative group rounded-lg overflow-hidden cursor-pointer shadow-sm border border-slate-200">
                    <img src={category.imageUrl} alt={t('HomePage_Categories_Alt', { category: t(`Category_${category.name}`) })} className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#0F172A] bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center p-2">
                    <h3 className="text-white text-lg font-semibold text-center">{t(`Category_${category.name}`)}</h3>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-[#0F172A] py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-center text-white">{t('HomePage_Testimonials_Title')}</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-[#1E293B] p-8 rounded-xl border border-slate-700 shadow-lg">
                    <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-[#F59E0B]" />)}
                    </div>
                    <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};


export const HomePage: React.FC<HomePageProps> = ({ photographers, onSearch, onViewProfile }) => {
  const { t } = useTranslation();
  useSeo({
    title: t('SEO_Home_Title'),
    description: t('SEO_Home_Description'),
  });

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "framenl",
    "url": "https://framenl-app.com", 
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://framenl-app.com/search?q={search_term_string}", 
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "framenl",
    "url": "https://framenl-app.com", 
    "logo": "https://framenl-app.com/logo.png", 
    "sameAs": []
  };

  return (
    <>
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      <Hero onSearch={onSearch} />
      <FeaturedPhotographers photographers={photographers} onViewProfile={onViewProfile} />
      <Categories onNavigate={() => onSearch('')} />
      <Testimonials />
    </>
  );
};
