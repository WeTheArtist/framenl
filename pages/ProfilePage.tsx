import React, { useState } from 'react';
import type { Photographer, MoodBoardItem } from '../types';
import { Button } from '../components/Button';
import { StarIcon, VerifiedIcon, MapPinIcon, ArrowLeftIcon, BookmarkIcon } from '../components/IconComponents';
import { Calendar } from '../components/Calendar';

interface ProfilePageProps {
  photographer: Photographer;
  onBack: () => void;
  onAddToMoodBoard: (item: MoodBoardItem) => void;
  moodBoard: MoodBoardItem[];
}

type ProfileTab = 'portfolio' | 'packages' | 'reviews' | 'availability';

const ProfileHeader: React.FC<{ photographer: Photographer }> = ({ photographer }) => (
    <div className="relative h-64 md:h-96 w-full">
        <img 
            src={photographer.portfolioImages[0]}
            alt={`${photographer.name}'s work`}
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{photographer.name}</h1>
            <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-2" />
                    <span>{photographer.location}</span>
                </div>
                {photographer.isVerified && (
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <VerifiedIcon className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm font-medium">Verified Professional</span>
                    </div>
                )}
            </div>
        </div>
    </div>
);

const PortfolioSection: React.FC<{ 
    photographer: Photographer;
    onAddToMoodBoard: (item: MoodBoardItem) => void;
    moodBoard: MoodBoardItem[];
}> = ({ photographer, onAddToMoodBoard, moodBoard }) => (
    <div>
      <h3 className="text-3xl font-bold mb-4 text-[#2C3E50]">About {photographer.name}</h3>
      <p className="text-[#5A6A78] leading-relaxed whitespace-pre-line mb-12">{photographer.bio}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photographer.portfolioImages.map((img, index) => {
            const isInMoodBoard = moodBoard.some(item => item.imageUrl === img);
            return (
              <div key={index} className="overflow-hidden rounded-lg group relative">
                  <img src={img} alt={`Portfolio image ${index + 1}`} className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"/>
                   <button 
                    onClick={() => onAddToMoodBoard({ 
                      photographerId: photographer.id, 
                      photographerName: photographer.name,
                      imageUrl: img 
                    })}
                    className="absolute top-2 right-2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    title={isInMoodBoard ? "Added to Mood Board" : "Add to Mood Board"}
                   >
                    <BookmarkIcon className="w-5 h-5" solid={isInMoodBoard} />
                   </button>
              </div>
            )
        })}
      </div>
    </div>
);

const PricingSection: React.FC<{ packages: Photographer['packages'] }> = ({ packages }) => (
    <div className="space-y-6">
        {packages.map(pkg => (
            <div key={pkg.id} className="border border-gray-200/80 rounded-2xl p-6 transition-shadow hover:shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div>
                        <h4 className="text-xl font-bold text-[#2C3E50]">{pkg.name}</h4>
                        <p className="text-[#5A6A78] mt-1">{pkg.description}</p>
                    </div>
                    <p className="text-2xl font-bold text-[#2C3E50] mt-2 sm:mt-0 sm:ml-4">€{pkg.price}</p>
                </div>
                <ul className="mt-4 space-y-2">
                    {pkg.features.map(feature => (
                         <li key={feature} className="flex items-center text-sm text-[#5A6A78]">
                            <svg className="w-4 h-4 mr-2 text-[#FF7D6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const ReviewsSection: React.FC<{ reviews: Photographer['reviews'], rating: number, reviewCount: number }> = ({ reviews, rating, reviewCount }) => (
    <div>
        <div className="flex items-center gap-4 mb-8">
             <h3 className="text-3xl font-bold text-[#2C3E50]">Reviews</h3>
             <div className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                <StarIcon className="w-4 h-4 text-[#FF7D6B] mr-1.5" />
                <span className="font-bold">{rating.toFixed(1)}</span>
                <span className="text-[#5A6A78] ml-1">({reviewCount} reviews)</span>
            </div>
        </div>
        <div className="space-y-8">
            {reviews.map(review => (
                <div key={review.id} className="border-b border-gray-200/80 pb-6 last:border-b-0">
                    <div className="flex items-center mb-1">
                        <p className="font-semibold text-[#2C3E50]">{review.clientName}</p>
                        <span className="mx-2 text-gray-300">•</span>
                        <p className="text-sm text-[#5A6A78]">{review.date}</p>
                    </div>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'text-[#FF7D6B]' : 'text-gray-300'}`} />)}
                    </div>
                    <p className="mt-2 text-[#5A6A78] italic">"{review.comment}"</p>
                </div>
            ))}
        </div>
    </div>
);

const AvailabilitySection: React.FC<{ bookedDates: string[] }> = ({ bookedDates }) => (
    <div>
        <h3 className="text-3xl font-bold mb-4 text-[#2C3E50]">Availability</h3>
        <p className="text-[#5A6A78] leading-relaxed mb-8">This calendar shows the photographer's booked dates. All other dates are potentially available. Please use the booking form to confirm a specific date.</p>
        <Calendar bookedDates={new Set(bookedDates)} />
    </div>
);


export const ProfilePage: React.FC<ProfilePageProps> = ({ photographer, onBack, onAddToMoodBoard, moodBoard }) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('portfolio');

  const TabButton: React.FC<{tab: ProfileTab; label: string}> = ({tab, label}) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-semibold text-lg transition-colors duration-200 ${
        activeTab === tab 
          ? 'border-b-2 border-[#FF7D6B] text-[#FF7D6B]' 
          : 'text-[#5A6A78] hover:text-[#2C3E50]'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white">
      <ProfileHeader photographer={photographer} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={onBack} className="flex items-center text-sm font-medium text-[#5A6A78] hover:text-[#2C3E50] mb-8">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Search Results
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2">
            <div className="border-b border-gray-200/80 mb-8">
                <nav className="-mb-px flex space-x-6 overflow-x-auto">
                    <TabButton tab="portfolio" label="Portfolio" />
                    <TabButton tab="packages" label="Packages" />
                    <TabButton tab="reviews" label="Reviews" />
                    <TabButton tab="availability" label="Availability" />
                </nav>
            </div>

            <div className="transition-opacity duration-300">
                {activeTab === 'portfolio' && <PortfolioSection photographer={photographer} onAddToMoodBoard={onAddToMoodBoard} moodBoard={moodBoard} />}
                {activeTab === 'packages' && <PricingSection packages={photographer.packages} />}
                {activeTab === 'reviews' && <ReviewsSection reviews={photographer.reviews} rating={photographer.rating} reviewCount={photographer.reviewCount} />}
                {activeTab === 'availability' && <AvailabilitySection bookedDates={photographer.bookedDates} />}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-[#FFF9F5] p-6 rounded-2xl border border-gray-200/80">
              <h3 className="text-2xl font-bold text-center text-[#2C3E50]">Book {photographer.name}</h3>
              <p className="text-center text-sm text-[#5A6A78] mt-1">Starting from €{photographer.startingPrice}</p>
              
              <div className="mt-6 space-y-4">
                 <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[#2C3E50]">Date</label>
                    <input type="date" id="date" className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
                 </div>
                 <div>
                    <label htmlFor="package" className="block text-sm font-medium text-[#2C3E50]">Package</label>
                    <select id="package" className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm">
                        {photographer.packages.map(p => <option key={p.id}>{p.name}</option>)}
                    </select>
                 </div>
              </div>

              <div className="mt-8 border-t border-gray-200/80 pt-6">
                <div className="flex justify-between items-center font-bold text-xl text-[#2C3E50]">
                    <span>Quote Total</span>
                    <span>€{photographer.startingPrice}</span>
                </div>
                 <Button className="w-full mt-4 text-lg !py-3">Request to Book</Button>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};