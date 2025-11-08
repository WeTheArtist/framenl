
import React from 'react';
import type { User, Booking } from '../types';

interface UserDashboardPageProps {
  user: User;
  onViewProfile: (photographerId: string) => void;
}

const BookingCard: React.FC<{ booking: Booking; onViewProfile: (id: string) => void }> = ({ booking, onViewProfile }) => {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-NL', options);
    };

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
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                </div>
                 <div className="mt-2 border-t pt-2">
                    <p className="text-sm font-medium text-[#2C3E50]">Date: {formatDate(booking.date)}</p>
                    <p className="text-sm text-[#5A6A78]">Price: €{booking.package.price}</p>
                </div>
                <div className="text-right mt-2">
                    <button onClick={() => onViewProfile(booking.photographerId)} className="text-sm font-semibold text-[#FF7D6B] hover:text-[#E86A5A]">
                        View Photographer
                    </button>
                </div>
            </div>
        </div>
    )
};


export const UserDashboardPage: React.FC<UserDashboardPageProps> = ({ user, onViewProfile }) => {
  const upcomingBookings = user.bookings.filter(b => b.status === 'upcoming');
  const pastBookings = user.bookings.filter(b => b.status === 'completed');

  return (
    <div className="bg-[#FFF9F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">My Bookings</h1>
          <p className="mt-2 text-lg text-[#5A6A78]">
            Welcome back, {user.name}. Here are your scheduled photoshoots.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
            <div>
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Upcoming</h2>
                {upcomingBookings.length > 0 ? (
                    <div className="space-y-4">
                        {upcomingBookings.map(booking => <BookingCard key={booking.id} booking={booking} onViewProfile={onViewProfile} />)}
                    </div>
                ) : (
                    <p className="text-[#5A6A78] bg-white p-6 rounded-lg border">You have no upcoming bookings.</p>
                )}
            </div>
             <div>
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Past Bookings</h2>
                {pastBookings.length > 0 ? (
                    <div className="space-y-4">
                        {pastBookings.map(booking => <BookingCard key={booking.id} booking={booking} onViewProfile={onViewProfile} />)}
                    </div>
                ) : (
                    <p className="text-[#5A6A78] bg-white p-6 rounded-lg border">You have no past bookings yet.</p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
