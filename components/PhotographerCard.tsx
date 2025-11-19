
import React from 'react';
import type { Photographer } from '../types';
import { StarIcon, VerifiedIcon, MapPinIcon } from './IconComponents';
import { useTranslation } from '../hooks/useTranslation';

interface PhotographerCardProps {
  photographer: Photographer;
  onViewProfile: (photographer: Photographer) => void;
}

export const PhotographerCard: React.FC<PhotographerCardProps> = ({ photographer, onViewProfile }) => {
  const { t } = useTranslation();
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onViewProfile(photographer);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer group"
      onClick={() => onViewProfile(photographer)}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`View profile for ${photographer.name}`}
    >
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg"
          src={photographer.profileImageUrl}
          alt={`Profile photo of ${photographer.name}`}
          loading="lazy"
        />
        {photographer.isVerified && (
          <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow">
            <VerifiedIcon className="w-5 h-5 text-[#FF7D6B]" />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#FF7D6B] transition-colors">{photographer.name}</h3>
            <div className="flex items-center space-x-1 text-sm">
                <StarIcon className="w-4 h-4 text-[#F59E0B]" />
                <span className="font-semibold text-[#0F172A]">{photographer.rating.toFixed(1)}</span>
                <span className="text-[#64748B]">({photographer.reviewCount})</span>
            </div>
        </div>
        
        <p className="text-[#64748B] text-sm mt-1 font-medium">{photographer.specialties.join(' • ')}</p>
        
        <div className="flex items-center text-[#64748B] mt-3 text-sm">
          <MapPinIcon className="w-4 h-4 mr-1.5" />
          <span>{photographer.location}</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 mt-4">
            <div className="flex items-baseline justify-between">
                <div>
                    <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wide">{t('PhotographerCard_StartingFrom')}</span>
                    <p className="text-xl font-bold text-[#0F172A]">€{photographer.startingPrice}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
