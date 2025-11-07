import React from 'react';
import { ChevronDownIcon } from './IconComponents';

export const FilterSidebar: React.FC = () => {
    // In a real app, state and handlers would be passed here to manage filters.
    // For this prototype, it's a static display component.

  const specialties = ['Wedding', 'Portrait', 'Corporate', 'Family', 'Events', 'Fashion', 'Real Estate'];

  const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <button type="button" className="flex w-full items-center justify-between bg-transparent py-3 text-sm text-[#5A6A78] hover:text-[#2C3E50]">
          <span className="font-medium text-[#2C3E50]">{title}</span>
          <span className="ml-6 flex items-center">
            <ChevronDownIcon className="h-5 w-5" />
          </span>
        </button>
      </h3>
      <div className="pt-6">{children}</div>
    </div>
  );

  return (
    <aside className="lg:w-72 bg-white p-6 rounded-2xl border border-gray-200/80 h-fit sticky top-28">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      <FilterSection title="Specialty">
        <div className="space-y-4">
          {specialties.map(specialty => (
            <div key={specialty} className="flex items-center">
              <input id={`filter-specialty-${specialty}`} name="specialty[]" defaultValue={specialty} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#FF7D6B] focus:ring-[#FF7D6B]" />
              <label htmlFor={`filter-specialty-${specialty}`} className="ml-3 text-sm text-[#5A6A78]">{specialty}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="flex items-center space-x-2">
            <input type="number" placeholder="Min" className="w-full rounded-lg border-gray-300 bg-white text-sm focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
            <span>-</span>
            <input type="number" placeholder="Max" className="w-full rounded-lg border-gray-300 bg-white text-sm focus:ring-[#FF7D6B] focus:border-[#FF7D6B]" />
        </div>
      </FilterSection>

      <FilterSection title="Rating">
        <div className="space-y-2">
            {[4, 3, 2].map(rating => (
                 <div key={rating} className="flex items-center">
                    <input id={`filter-rating-${rating}`} name="rating[]" type="radio" className="h-4 w-4 border-gray-300 text-[#FF7D6B] focus:ring-[#FF7D6B]" />
                    <label htmlFor={`filter-rating-${rating}`} className="ml-3 text-sm text-[#5A6A78]">{rating} stars & up</label>
                </div>
            ))}
        </div>
      </FilterSection>
      
    </aside>
  );
};