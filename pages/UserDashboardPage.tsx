
import React from 'react';
import type { User, Booking } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface UserDashboardPageProps {
  user: User;
  onViewProfile: (photographerId: string) => void;
}

const BookingCard: React.FC<{ booking: Booking; onViewProfile: (id: string) => void }> = ({ booking, onViewProfile }) => {
    const { t, language } = useTranslation();
    const formatDate = (dateString: string) => {
        const locale = `${language.toLowerCase()}-${language === 'EN' ? 'US' : language}`;
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(locale, options);
    };

    const statusTextKey = `UserDashboard_Status_${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}` as const;

    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200/80 flex items-start space-x-4">
            <img 
                src={booking.photographerProfileImage} 
                alt={booking.photographerName}
                className="w-24 h-24 rounded-md object-cover"
            />
            <div className="flex-grow">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-semibold text-lg text-[#2C3E50]">{booking.photographerName}</p>
                        <p className="text-sm text-[#5A6A78]">{booking.package.name}</p>
                    </div>
                     <span className={`text-xs font-bold px-2 py-1 rounded-full ${booking.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                        {t(statusTextKey)}
                    </span>
                </div>
                 <div className="mt-2 border-t pt-2">
                    <p className="text-sm font-medium text-[#2C3E50]">{t('BookingModal_Date')}: {formatDate(booking.date)}</p>
                    <p className="text-sm text-[#5A6A78]">{t('Dashboard_Price')}: €{booking.package.price}</p>
                </div>
                <div className="text-right mt-2">
                    <button onClick={() => onViewProfile(booking.photographerId)} className="text-sm font-semibold text-[#FF7D6B] hover:text-[#E86A5A]">
                        {t('UserDashboard_ViewPhotographer')}
                    </button>
                </div>
            </div>
        </div>
    )
};


export const UserDashboardPage: React.FC<UserDashboardPageProps> = ({ user, onViewProfile }) => {
  const { t } = useTranslation();
  const upcomingBookings = user.bookings.filter(b => b.status === 'upcoming');
  const pastBookings = user.bookings.filter(b => b.status === 'completed');

  return (
    <div className="bg-[#FFF9F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">{t('UserDashboard_Title')}</h1>
          <p className="mt-2 text-lg text-[#5A6A78]">
            {t('UserDashboard_Welcome', { name: user.name })}
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
            <div>
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">{t('UserDashboard_Upcoming')}</h2>
                {upcomingBookings.length > 0 ? (
                    <div className="space-y-4">
                        {upcomingBookings.map(booking => <BookingCard key={booking.id} booking={booking} onViewProfile={onViewProfile} />)}
                    </div>
                ) : (
                    <p className="text-[#5A6A78] bg-white p-6 rounded-lg border">{t('UserDashboard_NoUpcoming')}</p>
                )}
            </div>
             <div>
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">{t('UserDashboard_Past')}</h2>
                {pastBookings.length > 0 ? (
                    <div className="space-y-4">
                        {pastBookings.map(booking => <BookingCard key={booking.id} booking={booking} onViewProfile={onViewProfile} />)}
                    </div>
                ) : (
                    <p className="text-[#5A6A78] bg-white p-6 rounded-lg border">{t('UserDashboard_NoPast')}</p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
