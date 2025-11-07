
import React from 'react';
import type { MoodBoardItem } from '../types';
import { Button } from '../components/Button';
import { TrashIcon, CameraIcon } from '../components/IconComponents';

interface MoodBoardPageProps {
  items: MoodBoardItem[];
  onRemove: (imageUrl: string) => void;
  onViewProfile: (photographerId: string) => void;
}

export const MoodBoardPage: React.FC<MoodBoardPageProps> = ({ items, onRemove, onViewProfile }) => {
  return (
    <div className="bg-[#FFF9F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Your Mood Board</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
            {items.length > 0
              ? `You have ${items.length} image${items.length === 1 ? '' : 's'} saved. Your space for inspiration.`
              : 'Your mood board is empty. Browse photographer portfolios and click the bookmark icon to save images!'}
          </p>
        </header>

        {items.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="break-inside-avoid bg-white rounded-lg shadow-sm border overflow-hidden group relative">
                <img src={item.imageUrl} alt={`Inspiration from ${item.photographerName}`} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                    <p className="text-sm font-semibold">by {item.photographerName}</p>
                    <div className="flex justify-between items-center mt-2">
                       <Button variant="secondary" className="!bg-white/20 !text-white !px-3 !py-1.5 text-xs" onClick={() => onViewProfile(item.photographerId)}>
                          View Profile
                       </Button>
                       <button onClick={() => onRemove(item.imageUrl)} className="p-2 rounded-full hover:bg-white/20" title="Remove">
                        <TrashIcon className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80">
            <CameraIcon className="w-16 h-16 mx-auto text-gray-300" />
            <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Start Collecting</h3>
            <p className="text-[#5A6A78] mt-2 max-w-md mx-auto">
              Go to a photographer's profile and click the bookmark icon on any photo to add it here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};