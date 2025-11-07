import React, { useState } from 'react';
import type { Photographer } from '../types';
import { findPhotographersWithAI } from '../services/geminiService';
import { Button } from './Button';

interface AiSearchProps {
  photographers: Photographer[];
  onResults: (photographerIds: string[]) => void;
  onClear: () => void;
}

export const AiSearch: React.FC<AiSearchProps> = ({ photographers, onResults, onClear }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setError('');
    setHasSearched(true);
    try {
      const ids = await findPhotographersWithAI(query, photographers);
      onResults(ids);
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.");
      onResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setHasSearched(false);
    setError('');
    onClear();
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/80 mb-8">
      <div className="flex items-center gap-3">
         <div className="bg-orange-100 text-[#E86A5A] rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        </div>
        <h2 className="text-xl font-bold text-[#2C3E50]">Search with AI</h2>
      </div>
      <p className="text-sm text-[#5A6A78] mt-2">
        Describe your ideal photographer in your own words. For example: <span className="italic">"A fun family photographer in Utrecht for a relaxed outdoor shoot."</span>
      </p>
      <div className="mt-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="I'm looking for..."
          className="w-full p-3 rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm"
          rows={2}
          disabled={isLoading}
        />
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <Button onClick={handleSearch} disabled={isLoading || !query.trim()} className="w-full sm:w-auto">
              {isLoading ? 'Thinking...' : 'Find Matches'}
            </Button>
            {hasSearched && (
                <Button onClick={handleClear} variant="secondary" className="w-full sm:w-auto">
                    Clear AI Search
                </Button>
            )}
        </div>
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
};