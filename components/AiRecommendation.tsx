
import React, { useState, useCallback } from 'react';
import { generateRecommendation } from '../services/geminiService';
import { Button } from './Button';
import type { Photographer } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface AiRecommendationProps {
  photographer: Photographer;
}

export const AiRecommendation: React.FC<AiRecommendationProps> = ({ photographer }) => {
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setRecommendation('');

    const prompt = `A user is looking for a photographer for an "intimate, outdoor elopement near Amsterdam". Why would photographer ${photographer.name} be a good fit? Their specialties are "${photographer.specialties.join(', ')}" and their bio says: "${photographer.bio}".`;
    
    try {
      const result = await generateRecommendation(prompt);
      setRecommendation(result);
    } catch (err)
 {
      setError(t('AI_Recommendation_Error'));
    } finally {
      setIsLoading(false);
    }
  }, [photographer, t]);

  return (
    <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
      <div className="flex items-center gap-3">
        <div className="bg-orange-200 text-[#E86A5A] rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        </div>
        <h3 className="text-lg font-bold text-[#2C3E50]">{t('AI_Recommendation_Title')}</h3>
      </div>
      <p className="text-[#5A6A78] mt-2 text-sm">
        {t('AI_Recommendation_Desc', { name: photographer.name })}
      </p>
      
      <div className="mt-4">
        <Button onClick={handleGenerate} disabled={isLoading} className="w-full md:w-auto" variant="secondary">
          {isLoading ? t('AI_Recommendation_Thinking') : t('AI_Recommendation_Button')}
        </Button>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      
      {recommendation && (
        <div className="mt-4 p-4 bg-white rounded-md border border-orange-200">
          <p className="text-sm text-[#2C3E50] font-medium">{recommendation}</p>
        </div>
      )}
    </div>
  );
};
