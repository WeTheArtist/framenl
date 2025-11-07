
import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ProfilePage } from './pages/ProfilePage';
import { PhotographerDashboardPage } from './pages/PhotographerDashboardPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Photographer, MoodBoardItem } from './types';
import { PHOTOGRAPHERS } from './constants';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { TrustAndSafetyPage } from './pages/TrustAndSafetyPage';
import { PricingPage } from './pages/PricingPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { MoodBoardPage } from './pages/MoodBoardPage';

export type Page = 
  | 'home' 
  | 'search' 
  | 'profile' 
  | 'photographerDashboard'
  | 'login'
  | 'signup'
  | 'howItWorks'
  | 'trustAndSafety'
  | 'pricing'
  | 'resources'
  | 'about'
  | 'contact'
  | 'careers'
  | 'moodBoard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPhotographer, setSelectedPhotographer] = useState<Photographer | null>(null);
  const [moodBoard, setMoodBoard] = useState<MoodBoardItem[]>([]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const viewProfile = (photographer: Photographer) => {
    setSelectedPhotographer(photographer);
    navigateTo('profile');
  };

  const addToMoodBoard = (item: MoodBoardItem) => {
    if (!moodBoard.some(i => i.imageUrl === item.imageUrl)) {
      setMoodBoard(prev => [...prev, item]);
    }
  };

  const removeFromMoodBoard = (imageUrl: string) => {
    setMoodBoard(prev => prev.filter(item => item.imageUrl !== imageUrl));
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onSearch={() => navigateTo('search')} onViewProfile={viewProfile} />;
      case 'search':
        return <SearchResultsPage photographers={PHOTOGRAPHERS} onViewProfile={viewProfile} />;
      case 'profile':
        if (selectedPhotographer) {
          return <ProfilePage 
                    photographer={selectedPhotographer} 
                    onBack={() => navigateTo('search')} 
                    onAddToMoodBoard={addToMoodBoard}
                    moodBoard={moodBoard}
                 />;
        }
        navigateTo('search');
        return null;
      case 'photographerDashboard':
        return <PhotographerDashboardPage photographer={PHOTOGRAPHERS[0]}/>;
      case 'login':
        return <LoginPage onNavigate={navigateTo} />;
      case 'signup':
        return <SignUpPage onNavigate={navigateTo} />;
      case 'howItWorks':
        return <HowItWorksPage />;
      case 'trustAndSafety':
        return <TrustAndSafetyPage />;
      case 'pricing':
        return <PricingPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      case 'moodBoard':
        return <MoodBoardPage items={moodBoard} onRemove={removeFromMoodBoard} onViewProfile={(id) => {
            const photographer = PHOTOGRAPHERS.find(p => p.id === id);
            if(photographer) viewProfile(photographer);
        }} />;
      default:
        return <HomePage onSearch={() => navigateTo('search')} onViewProfile={viewProfile} />;
    }
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen flex flex-col text-[#2C3E50]">
      <Header onNavigate={navigateTo} moodBoardCount={moodBoard.length} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo}/>
    </div>
  );
};

export default App;