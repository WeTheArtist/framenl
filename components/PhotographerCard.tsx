import React from 'react';
import type { Photographer } from '../types';
import { StarIcon, VerifiedIcon, MapPinIcon } from './IconComponents';
import { Button } from './Button';

interface PhotographerCardProps {
  photographer: Photographer;
  onViewProfile: (photographer: Photographer) => void;
}

export const PhotographerCard: React.FC<PhotographerCardProps> = ({ photographer, onViewProfile }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-xl flex flex-col">
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-2xl"
          src={photographer.profileImageUrl}
          alt={photographer.name}
          loading="lazy"
        />
        {photographer.isVerified && (
          <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow">
            <VerifiedIcon className="w-6 h-6 text-[#FF7D6B]" />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#2C3E50]">{photographer.name}</h3>
            <div className="flex items-center space-x-1 text-sm">
                <StarIcon className="w-5 h-5 text-[#FF7D6B]" />
                <span className="font-semibold text-[#2C3E50]">{photographer.rating.toFixed(1)}</span>
                <span className="text-[#5A6A78]">({photographer.reviewCount})</span>
            </div>
        </div>
        
        <p className="text-[#5A6A78] text-sm mt-1">{photographer.specialties.join(' • ')}</p>
        
        <div className="flex items-center text-[#5A6A78] mt-3 text-sm">
          <MapPinIcon className="w-4 h-4 mr-1.5" />
          <span>{photographer.location}</span>
        </div>
        
        <div className="mt-auto pt-4">
            <div className="flex items-baseline justify-between">
                <div>
                    <span className="text-sm text-[#5A6A78]">Starting from</span>
                    <p className="text-xl font-bold text-[#2C3E50]">€{photographer.startingPrice}</p>
                </div>
                 <Button onClick={() => onViewProfile(photographer)} variant="secondary" className="px-5 !py-2 text-sm">
                    View
                 </Button>
            </div>
        </div>
      </div>
    </div>
  );
};