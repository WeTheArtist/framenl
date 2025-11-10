
import React, { useState, useMemo, useEffect } from 'react';
import type { Photographer } from '../types';
import { PhotographerCard } from '../components/PhotographerCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { AiSearch } from '../components/AiSearch';
import { useSeo } from '../hooks/useSeo';
import { StructuredData } from '../components/StructuredData';

interface SearchResultsPageProps {
  photographers: Photographer[];
  onViewProfile: (photographer: Photographer) => void;
  initialQuery: string;
}

export interface Filters {
  query: string;
  specialties: Set<string>;
  price: { min: number | null, max: number | null };
  rating: number | null;
}

const SearchBar: React.FC<{ query: string, onQueryChange: (query: string) => void }> = ({ query, onQueryChange }) => (
    <div className="mb-8">
        <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by name, specialty, location..."
            className="w-full px-5 py-3 rounded-full text-gray-900 bg-white border border-gray-300 focus:ring-2 focus:ring-[#FF7D6B] focus:border-[#FF7D6B]"
        />
    </div>
);

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ photographers, onViewProfile, initialQuery }) => {
  const [aiFilteredIds, setAiFilteredIds] = useState<string[] | null>(null);
  const [filters, setFilters] = useState<Filters>({
    query: initialQuery,
    specialties: new Set(),
    price: { min: null, max: null },
    rating: null,
  });

  useEffect(() => {
    setFilters(prev => ({ ...prev, query: initialQuery }));
  }, [initialQuery]);

  useSeo({
    title: 'Find Photographers in the Netherlands | framenl',
    description: 'Browse and filter professional photographers across the Netherlands. Compare portfolios, prices, and reviews to find the perfect match for your needs on framenl.'
  });

  const handleAiResults = (ids: string[]) => {
    setAiFilteredIds(ids);
  };
  
  const clearAiFilter = () => {
    setAiFilteredIds(null);
  }

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };
  
  const resetFilters = () => {
    setFilters({
        query: '',
        specialties: new Set(),
        price: { min: null, max: null },
        rating: null,
    });
    clearAiFilter();
  };

  const filteredPhotographers = useMemo(() => {
    if (aiFilteredIds !== null) {
      const idSet = new Set(aiFilteredIds);
      return photographers.filter(p => idSet.has(p.id));
    }

    return photographers.filter(p => {
        // Text Query Filter
        const query = filters.query.toLowerCase().trim();
        if (query) {
            const isMatch = p.name.toLowerCase().includes(query) ||
                            p.location.toLowerCase().includes(query) ||
                            p.specialties.some(s => s.toLowerCase().includes(query)) ||
                            p.bio.toLowerCase().includes(query);
            if (!isMatch) return false;
        }

        // Specialty Filter
        if (filters.specialties.size > 0) {
            const hasSpecialty = p.specialties.some(s => filters.specialties.has(s));
            if (!hasSpecialty) return false;
        }

        // Price Filter
        const { min, max } = filters.price;
        if (min !== null && p.startingPrice < min) return false;
        if (max !== null && p.startingPrice > max) return false;
        
        // Rating Filter
        if (filters.rating !== null && p.rating < filters.rating) return false;

        return true;
    });
  }, [photographers, filters, aiFilteredIds]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Photographers in the Netherlands",
    "itemListElement": filteredPhotographers.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ProfessionalService",
        "name": p.name,
        "image": p.profileImageUrl,
        "description": p.bio.substring(0, 120) + '...',
        "url": `/profile/${p.id}` // A real app would have a URL structure like this
      }
    }))
  };

  return (
    <div className="bg-[#FFF9F5]">
      <StructuredData data={itemListSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Find a Photographer</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
            {aiFilteredIds !== null
              ? `Showing ${filteredPhotographers.length} top matches from AI search.`
              : `Showing ${filteredPhotographers.length} of ${photographers.length} professionals.`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-72">
             <FilterSidebar filters={filters} onFilterChange={handleFilterChange} onReset={resetFilters}/>
          </div>
          <div className="flex-1">
            <SearchBar query={filters.query} onQueryChange={(q) => handleFilterChange({ query: q })} />
            <AiSearch photographers={photographers} onResults={handleAiResults} onClear={clearAiFilter} />
            {filteredPhotographers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPhotographers.map(photographer => (
                  <PhotographerCard 
                    key={photographer.id} 
                    photographer={photographer} 
                    onViewProfile={onViewProfile} 
                  />
                ))}
              </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80">
                    <h3 className="text-xl font-semibold text-[#2C3E50]">No Photographers Found</h3>
                    <p className="text-[#5A6A78] mt-2">
                        {aiFilteredIds !== null ? "AI search didn't find a match. Try rephrasing your request or clear the search to browse all." : "Try adjusting your search or filters to find more results."}
                    </p>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};