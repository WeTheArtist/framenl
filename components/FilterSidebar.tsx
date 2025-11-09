
import React, { useState } from 'react';
import { ChevronDownIcon } from './IconComponents';
import type { Filters } from '../pages/SearchResultsPage';
import { Button } from './Button';

interface FilterSidebarProps {
    filters: Filters;
    onFilterChange: (newFilters: Partial<Filters>) => void;
    onReset: () => void;
}

const specialties = ['Wedding', 'Portrait', 'Corporate', 'Family', 'Events', 'Fashion', 'Real Estate', 'Newborn', 'Architecture', 'Concerts'];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, onReset }) => {
    const [openSections, setOpenSections] = useState<Set<string>>(new Set(['specialty', 'price']));

    const toggleSection = (section: string) => {
        setOpenSections(prev => {
            const newSet = new Set(prev);
            if (newSet.has(section)) {
                newSet.delete(section);
            } else {
                newSet.add(section);
            }
            return newSet;
        });
    };
    
    const handleSpecialtyChange = (specialty: string, checked: boolean) => {
        const newSpecialties = new Set(filters.specialties);
        if (checked) {
            newSpecialties.add(specialty);
        } else {
            newSpecialties.delete(specialty);
        }
        onFilterChange({ specialties: newSpecialties });
    };

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const numValue = value === '' ? null : parseInt(value, 10);
        onFilterChange({ price: { ...filters.price, [type]: numValue } });
    };
    
    const handleRatingChange = (rating: number) => {
        onFilterChange({ rating: filters.rating === rating ? null : rating });
    }

  const FilterSection: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({ title, id, children }) => (
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <button type="button" onClick={() => toggleSection(id)} className="flex w-full items-center justify-between bg-transparent py-3 text-sm text-[#5A6A78] hover:text-[#2C3E50]">
          <span className="font-medium text-[#2C3E50]">{title}</span>
          <span className="ml-6 flex items-center">
            <ChevronDownIcon className={`h-5 w-5 transition-transform ${openSections.has(id) ? 'rotate-180' : ''}`} />
          </span>
        </button>
      </h3>
      {openSections.has(id) && <div className="pt-6">{children}</div>}
    </div>
  );

  return (
    <aside className="lg:w-72 bg-white p-6 rounded-2xl border border-gray-200/80 h-fit sticky top-28">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button onClick={onReset} className="text-sm font-semibold text-[#FF7D6B] hover:text-[#E86A5A]">Reset</button>
      </div>
      
      <FilterSection title="Specialty" id="specialty">
        <div className="space-y-4">
          {specialties.map(specialty => (
            <div key={specialty} className="flex items-center">
              <input 
                id={`filter-specialty-${specialty}`} 
                name="specialty[]" 
                type="checkbox"
                checked={filters.specialties.has(specialty)}
                onChange={e => handleSpecialtyChange(specialty, e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#FF7D6B] focus:ring-[#FF7D6B]" 
              />
              <label htmlFor={`filter-specialty-${specialty}`} className="ml-3 text-sm text-[#5A6A78]">{specialty}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range" id="price">
        <div className="flex items-center space-x-2">
            <input 
                type="number" 
                placeholder="Min"
                value={filters.price.min ?? ''}
                onChange={e => handlePriceChange('min', e.target.value)}
                className="w-full rounded-lg border-gray-300 bg-white text-sm focus:ring-[#FF7D6B] focus:border-[#FF7D6B]"
                aria-label="Minimum price"
            />
            <span>-</span>
            <input 
                type="number" 
                placeholder="Max"
                value={filters.price.max ?? ''}
                onChange={e => handlePriceChange('max', e.target.value)}
                className="w-full rounded-lg border-gray-300 bg-white text-sm focus:ring-[#FF7D6B] focus:border-[#FF7D6B]"
                aria-label="Maximum price"
            />
        </div>
      </FilterSection>

      <FilterSection title="Rating" id="rating">
        <div className="space-y-2">
            {[4, 3, 2].map(rating => (
                 <div key={rating} className="flex items-center">
                    <input 
                        id={`filter-rating-${rating}`} 
                        name="rating" 
                        type="radio"
                        checked={filters.rating === rating}
                        onChange={() => handleRatingChange(rating)}
                        className="h-4 w-4 border-gray-300 text-[#FF7D6B] focus:ring-[#FF7D6B]"
                    />
                    <label htmlFor={`filter-rating-${rating}`} className="ml-3 text-sm text-[#5A6A78]">{rating} stars & up</label>
                </div>
            ))}
        </div>
      </FilterSection>
      
    </aside>
  );
};
