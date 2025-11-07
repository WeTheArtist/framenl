
import React, { useState, useMemo } from 'react';
import type { Photographer } from '../types';
import { PhotographerCard } from '../components/PhotographerCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { AiSearch } from '../components/AiSearch';

interface SearchResultsPageProps {
  photographers: Photographer[];
  onViewProfile: (photographer: Photographer) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ photographers, onViewProfile }) => {
  const [aiFilteredIds, setAiFilteredIds] = useState<string[] | null>(null);

  const handleAiResults = (ids: string[]) => {
    setAiFilteredIds(ids);
  };
  
  const clearAiFilter = () => {
    setAiFilteredIds(null);
  }

  const filteredPhotographers = useMemo(() => {
    if (aiFilteredIds === null) {
      return photographers;
    }
    const idSet = new Set(aiFilteredIds);
    return photographers.filter(p => idSet.has(p.id));
  }, [photographers, aiFilteredIds]);

  return (
    <div className="bg-[#FFF9F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Find a Photographer</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
            {aiFilteredIds !== null
              ? `Showing ${filteredPhotographers.length} top matches from AI search.`
              : `Browsing all ${filteredPhotographers.length} professionals.`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-72">
             <FilterSidebar />
          </div>
          <div className="flex-1">
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
                        {aiFilteredIds !== null ? "AI search didn't find a match. Try rephrasing your request or clear the search to browse all." : "Try adjusting your filters to find more results."}
                    </p>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};