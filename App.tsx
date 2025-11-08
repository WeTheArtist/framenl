
import React from 'react';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ProfilePage } from './pages/ProfilePage';
import { PhotographerDashboardPage } from './pages/PhotographerDashboardPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Photographer, MoodBoardItem, User, BookingPackage } from './types';
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
import { BookingModal } from './components/BookingModal';


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
  
interface BookingState {
  isOpen: boolean;
  photographer: Photographer | null;
  details: { date: string; pkg: BookingPackage; notes: string; } | null;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPhotographer, setSelectedPhotographer] = useState<Photographer | null>(null);
  
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('frameNLUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [moodBoard, setMoodBoard] = useState<MoodBoardItem[]>(() => {
    const saved = localStorage.getItem('frameNLMoodBoard');
    return saved ? JSON.parse(saved) : [];
  });

  const [photographers, setPhotographers] = useState<Photographer[]>(PHOTOGRAPHERS);
  const [bookingState, setBookingState] = useState<BookingState>({ isOpen: false, photographer: null, details: null });

  useEffect(() => {
    if (user) {
      localStorage.setItem('frameNLUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('frameNLUser');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('frameNLMoodBoard', JSON.stringify(moodBoard));
  }, [moodBoard]);


  const navigateTo = (page: Page) => {
    const protectedPages: Page[] = ['moodBoard', 'photographerDashboard'];
    if (!user && protectedPages.includes(page)) {
        setCurrentPage('login');
    } else {
        setCurrentPage(page);
    }
    window.scrollTo(0, 0);
  };
  
  const handleLogin = (name: string) => {
    setUser({ isLoggedIn: true, name });
    navigateTo('home');
  };

  const handleLogout = () => {
    setUser(null);
    navigateTo('home');
  };

  const viewProfile = (photographer: Photographer) => {
    setSelectedPhotographer(photographer);
    navigateTo('profile');
  };

  const addToMoodBoard = (item: MoodBoardItem) => {
    if (!user) {
        navigateTo('login');
        return;
    }
    if (!moodBoard.some(i => i.imageUrl === item.imageUrl)) {
      setMoodBoard(prev => [...prev, item]);
    }
  };

  const removeFromMoodBoard = (imageUrl: string) => {
    setMoodBoard(prev => prev.filter(item => item.imageUrl !== imageUrl));
  };
  
  const handleOpenBookingModal = (photographer: Photographer, details: { date: string; pkg: BookingPackage; notes: string; }) => {
    if (!user) {
        navigateTo('login');
        return;
    }
    setBookingState({ isOpen: true, photographer, details });
  };
  
  const handleBookingSuccess = () => {
    if (!bookingState.photographer || !bookingState.details) return;

    setPhotographers(currentPhotographers => 
        currentPhotographers.map(p => 
            p.id === bookingState.photographer!.id
                ? { ...p, bookedDates: [...p.bookedDates, bookingState.details!.date].sort() } 
                : p
        )
    );
    // The modal will close itself upon success.
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage photographers={photographers} onSearch={() => navigateTo('search')} onViewProfile={viewProfile} />;
      case 'search':
        return <SearchResultsPage photographers={photographers} onViewProfile={viewProfile} />;
      case 'profile':
        {
            const currentPhotographerData = photographers.find(p => p.id === selectedPhotographer?.id) || selectedPhotographer;
            if (currentPhotographerData) {
              return <ProfilePage 
                        photographer={currentPhotographerData} 
                        onBack={() => navigateTo('search')} 
                        onAddToMoodBoard={addToMoodBoard}
                        moodBoard={moodBoard}
                        onBookNow={(details) => handleOpenBookingModal(currentPhotographerData, details)}
                     />;
            }
            navigateTo('search');
            return null;
        }
      case 'photographerDashboard':
        return <PhotographerDashboardPage photographer={photographers[0]}/>;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={navigateTo} />;
      case 'signup':
        return <SignUpPage onSignUp={handleLogin} onNavigate={navigateTo} />;
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
            const photographer = photographers.find(p => p.id === id);
            if(photographer) viewProfile(photographer);
        }} />;
      default:
        return <HomePage photographers={photographers} onSearch={() => navigateTo('search')} onViewProfile={viewProfile} />;
    }
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen flex flex-col text-[#2C3E50]">
      <Header onNavigate={navigateTo} moodBoardCount={moodBoard.length} user={user} onLogout={handleLogout} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo}/>
      {bookingState.isOpen && bookingState.photographer && bookingState.details && (
         <BookingModal
            photographer={bookingState.photographer}
            bookingDetails={bookingState.details}
            onClose={() => setBookingState({ isOpen: false, photographer: null, details: null })}
            onBookingSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
};

export default App;
