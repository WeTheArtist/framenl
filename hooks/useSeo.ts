
import { useEffect } from 'react';
import type { SeoData } from '../types';
import { useTranslation } from './useTranslation';

export const useSeo = (seoData: SeoData) => {
  const { language } = useTranslation();
  useEffect(() => {
    document.title = seoData.title;

    document.documentElement.lang = language.toLowerCase();

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);
  }, [seoData, language]);
};
