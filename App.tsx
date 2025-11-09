
import React from 'react';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ProfilePage } from './pages/ProfilePage';
import { PhotographerDashboardPage } from './pages/PhotographerDashboardPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Photographer, MoodBoardItem, User, BookingPackage, Booking } from './types';
import { PHOTOGRAPHERS } from './constants';
import * as userService from './services/userService';
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
import { UserDashboardPage } from './pages/UserDashboardPage';
import { BookingModal } from './components/BookingModal';
import { MessagesPage } from './pages/MessagesPage';
import { WaitlistBanner } from './components/WaitlistBanner';


export type Page = 
  | 'home' 
  | 'search' 
  | 'profile' 
  | 'photographerDashboard'
  | 'userDashboard'
  | 'login'
  | 'signup'
  | 'howItWorks'
  | 'trustAndSafety'
  | 'pricing'
  | 'resources'
  | 'about'
  | 'contact'
  | 'careers'
  | 'moodBoard'
  | 'messages';
  
interface BookingState {
  isOpen: boolean;
  photographer: Photographer | null;
  details: { date: string; pkg: BookingPackage; notes: string; } | null;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPhotographer, setSelectedPhotographer] = useState<Photographer | null>(null);
  
  const [user, setUser] = useState<User | null>(() => {
    return userService.getLoggedInUser();
  });

  const [moodBoard, setMoodBoard] = useState<MoodBoardItem[]>(() => {
    const saved = localStorage.getItem('inFramenIMoodBoard');
    return saved ? JSON.parse(saved) : [];
  });

  const [photographers, setPhotographers] = useState<Photographer[]>(PHOTOGRAPHERS);
  const [bookingState, setBookingState] = useState<BookingState>({ isOpen: false, photographer: null, details: null });
  const [isBannerVisible, setIsBannerVisible] = useState(true);


  useEffect(() => {
    localStorage.setItem('inFramenIMoodBoard', JSON.stringify(moodBoard));
  }, [moodBoard]);


  const navigateTo = (page: Page) => {
    const protectedPages: Page[] = ['moodBoard', 'photographerDashboard', 'userDashboard', 'messages'];
    if (!user && protectedPages.includes(page)) {
        setCurrentPage('login');
    } else {
        setCurrentPage(page);
    }
    window.scrollTo(0, 0);
  };
  
  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    userService.setLoggedInUser(loggedInUser.email);
    navigateTo('home');
  };

  const handleLogout = () => {
    setUser(null);
    userService.logoutUser();
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
    if (!bookingState.photographer || !bookingState.details || !user) return;
    
    // 1. Create the new booking object
    const newBooking: Booking = {
        id: Date.now().toString(),
        photographerId: bookingState.photographer.id,
        photographerName: bookingState.photographer.name,
        photographerProfileImage: bookingState.photographer.profileImageUrl,
        date: bookingState.details.date,
        package: bookingState.details.pkg,
        status: new Date(bookingState.details.date) > new Date() ? 'upcoming' : 'completed',
    };
    
    // 2. Update the user with the new booking
    const updatedUser = userService.addBookingToUser(user.email, newBooking);
    if (updatedUser) {
        setUser(updatedUser); // Update user in state
    }

    // 3. Update the photographer's booked dates
    setPhotographers(currentPhotographers => 
        currentPhotographers.map(p => 
            p.id === bookingState.photographer!.id
                ? { ...p, bookedDates: [...p.bookedDates, bookingState.details!.date].sort() } 
                : p
        )
    );
  };
  
  const handleUpdatePhotographer = (updatedPhotographer: Photographer) => {
    setPhotographers(currentPhotographers =>
      currentPhotographers.map(p =>
        p.id === updatedPhotographer.id ? updatedPhotographer : p
      )
    );
    // After saving, navigate them to see the changes
    navigateTo('search');
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
      case 'photographerDashboard': {
        // The demo dashboard always edits the first photographer
        const photographerToEdit = photographers.find(p => p.id === '1') || photographers[0]; 
        return <PhotographerDashboardPage photographer={photographerToEdit} onSave={handleUpdatePhotographer} />;
      }
      case 'userDashboard':
        return user ? <UserDashboardPage user={user} onViewProfile={(id) => {
          const photographer = photographers.find(p => p.id === id);
          if (photographer) viewProfile(photographer);
        }} /> : null;
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
      case 'messages':
        return user ? <MessagesPage user={user} onViewProfile={(id) => {
            const photographer = photographers.find(p => p.id === id);
            if (photographer) viewProfile(photographer);
        }} /> : null;
      default:
        return <HomePage photographers={photographers} onSearch={() => navigateTo('search')} onViewProfile={viewProfile} />;
    }
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen flex flex-col text-[#2C3E50]">
      <Header onNavigate={navigateTo} moodBoardCount={moodBoard.length} user={user} onLogout={handleLogout} />
      {isBannerVisible && <WaitlistBanner onClose={() => setIsBannerVisible(false)} />}
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
