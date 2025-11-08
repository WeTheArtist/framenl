
import React from 'react';
import type { Photographer } from '../types';
import { CATEGORIES, TESTIMONIALS } from '../constants';
import { PhotographerCard } from '../components/PhotographerCard';
import { Button } from '../components/Button';
import { StarIcon } from '../components/IconComponents';
import { AiRecommendation } from '../components/AiRecommendation';

interface HomePageProps {
  photographers: Photographer[];
  onSearch: () => void;
  onViewProfile: (photographer: Photographer) => void;
}

const Hero: React.FC<{ onSearch: () => void }> = ({ onSearch }) => (
  <div className="relative bg-slate-900 text-white min-h-[60vh] md:min-h-[70vh] flex items-center">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2073&auto=format&fit=crop')" }}
    ></div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
        Find Your Perfect Photographer
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200">
        Discover and book talented local photographers in the Netherlands for any occasion.
      </p>
      <div className="mt-10 max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="e.g. Wedding photographer in Amsterdam"
            className="w-full px-5 py-4 rounded-full text-gray-900 bg-white focus:ring-2 focus:ring-[#FF7D6B] border-0"
          />
          <Button onClick={onSearch} className="sm:w-auto px-8 !py-4 text-lg">Search</Button>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedPhotographers: React.FC<{ photographers: Photographer[], onViewProfile: (photographer: Photographer) => void }> = ({ photographers, onViewProfile }) => (
  <div className="py-16 sm:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-center text-[#2C3E50]">Featured Photographers</h2>
      <p className="mt-4 max-w-2xl mx-auto text-center text-[#5A6A78]">
        Handpicked professionals with exceptional talent and proven client satisfaction.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photographers.slice(0, 3).map(p => (
          <PhotographerCard key={p.id} photographer={p} onViewProfile={onViewProfile} />
        ))}
      </div>
    </div>
  </div>
);

const Categories: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => (
  <div className="py-16 sm:py-24 bg-[#FFF9F5]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-4xl font-bold tracking-tight text-center text-[#2C3E50]">Explore by Category</h2>
       <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {CATEGORIES.map(category => (
          <div key={category.name} onClick={onNavigate} className="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm">
            <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center p-2">
              <h3 className="text-white text-lg font-semibold text-center">{category.name}</h3>
            </div>
          </div>
        ))}
       </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="bg-orange-100/50 py-16 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-center text-[#2C3E50]">What Our Clients Say</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-[#FF7D6B]" />)}
            </div>
            <p className="text-[#5A6A78] italic">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold text-[#2C3E50]">{testimonial.author}</p>
              <p className="text-sm text-[#5A6A78]">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({ photographers, onSearch, onViewProfile }) => {
  return (
    <>
      <Hero onSearch={onSearch} />
      <FeaturedPhotographers photographers={photographers} onViewProfile={onViewProfile} />
      <Categories onNavigate={onSearch} />
       <div className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <AiRecommendation photographer={photographers[0]} />
        </div>
      </div>
      <Testimonials />
    </>
  );
};
