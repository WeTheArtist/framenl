
export interface Photographer {
  id: string;
  name: string;
  specialties: string[];
  location: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  bio: string;
  isVerified: boolean;
  profileImageUrl: string;
  portfolioImages: string[];
  packages: BookingPackage[];
  reviews: Review[];
  bookedDates: string[]; // YYYY-MM-DD format
}

export interface BookingPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  name: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface MoodBoardItem {
  photographerId: string;
  photographerName: string;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Not always present, e.g., for OAuth
  bookings: Booking[];
}

export interface Booking {
    id: string;
    photographerId: string;
    photographerName: string;
    photographerProfileImage: string;
    date: string;
    package: BookingPackage;
    status: 'upcoming' | 'completed';
}

export interface Message {
  id: string;
  senderId: 'user' | string; // 'user' or photographerId
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  photographerId: string;
  photographerName: string;
  photographerProfileImage: string;
  lastMessage: string;
  lastMessageTimestamp: string;
  messages: Message[];
}
