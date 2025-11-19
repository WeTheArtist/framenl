
import type { Photographer, Category, Testimonial } from './types';

export const PHOTOGRAPHERS: Photographer[] = [
  {
    id: '2',
    name: 'Lars Jansen',
    specialties: ['Corporate', 'Headshots'],
    location: 'Rotterdam, NL',
    rating: 5.0,
    reviewCount: 88,
    startingPrice: 450,
    isVerified: true,
    profileImageUrl: 'https://picsum.photos/seed/lars/400/400',
    bio: 'Professional and polished corporate photography to elevate your brand. With over 10 years of experience, I deliver high-quality images that meet your business needs.',
    portfolioImages: [
      'https://picsum.photos/seed/lars_p1/800/600',
      'https://picsum.photos/seed/lars_p2/600/800',
    ],
    packages: [
      { id: 'p1', name: 'Headshot Session', price: 450, description: '1-hour studio session, 3 retouched images.', features: ['1 Hour Session', 'Studio Lighting', '3 Retouched Photos'] },
      { id: 'p2', name: 'Team Branding', price: 1200, description: 'Half-day office shoot for up to 10 employees.', features: ['4 Hours', 'On-Site Studio', 'Group & Individual'] },
    ],
    reviews: [
      { id: 'r1', clientName: 'TechCorp B.V.', rating: 5, comment: 'Lars delivered exceptional headshots for our entire team. Highly professional and efficient.', date: '2023-11-01' },
    ],
    bookedDates: ['2024-08-15', '2024-08-16', '2024-09-12'],
  },
  {
    id: '6',
    name: 'Sven Bakker',
    specialties: ['Real Estate', 'Architecture'],
    location: 'Groningen, NL',
    rating: 4.8,
    reviewCount: 150,
    startingPrice: 550,
    isVerified: false,
    profileImageUrl: 'https://picsum.photos/seed/sven/400/400',
    bio: 'Crisp, clean, and inviting architectural photography that sells properties. Using advanced techniques to showcase every space at its best.',
    portfolioImages: [
      'https://picsum.photos/seed/sven_p1/800/600',
      'https://picsum.photos/seed/sven_p2/800/600',
    ],
    packages: [
      { id: 'p1', name: 'Standard Property Shoot', price: 550, description: 'Up to 200m², 25 high-res photos.', features: ['Drone Photos Included', '24h Delivery', '25 Photos'] },
    ],
    reviews: [
      { id: 'r1', clientName: 'Makelaars Noord', rating: 5, comment: 'Sven\'s photos helped us sell the property in a week. True professional.', date: '2023-10-28' },
    ],
    bookedDates: ['2024-08-05', '2024-08-06', '2024-08-07', '2024-08-08', '2024-08-09'],
  },
  {
    id: '4',
    name: 'Ruben Vos',
    specialties: ['Events', 'Concerts'],
    location: 'Eindhoven, NL',
    rating: 4.7,
    reviewCount: 95,
    startingPrice: 800,
    isVerified: true,
    profileImageUrl: 'https://picsum.photos/seed/ruben/400/400',
    bio: 'Dynamic and energetic event photography that captures the atmosphere of your occasion. From conferences to festivals, I cover it all.',
    portfolioImages: [
      'https://picsum.photos/seed/ruben_p1/800/600',
      'https://picsum.photos/seed/ruben_p2/800/500',
      'https://picsum.photos/seed/ruben_p3/600/800',
    ],
    packages: [
      { id: 'p1', name: 'Half-Day Event', price: 800, description: '4 hours coverage, fast turnaround.', features: ['4 hours', 'Fast Turnaround', 'Online Gallery'] },
    ],
    reviews: [
      { id: 'r1', clientName: 'NextGen Summit', rating: 4.5, comment: 'Great energy and captured the vibe perfectly.', date: '2023-08-12' },
    ],
    bookedDates: ['2024-08-17', '2024-08-31', '2024-09-01'],
  },
  {
    id: '5',
    name: 'Chloé Dubois',
    specialties: ['Fashion', 'Brand'],
    location: 'Maastricht, NL',
    rating: 4.9,
    reviewCount: 72,
    startingPrice: 1200,
    isVerified: true,
    profileImageUrl: 'https://picsum.photos/seed/chloe/400/400',
    bio: 'High-fashion and editorial photography with a creative and bold vision. Collaborating with brands and designers to create stunning visual narratives.',
    portfolioImages: [
      'https://picsum.photos/seed/chloe_p1/600/800',
      'https://picsum.photos/seed/chloe_p2/800/600',
      'https://picsum.photos/seed/chloe_p3/600/800',
    ],
    packages: [
      { id: 'p1', name: 'Lookbook Shoot', price: 1200, description: 'Half-day shoot, professional model sourcing.', features: ['4 Hour Session', 'Studio/Location', '15 Retouched Images'] },
    ],
    reviews: [
      { id: 'r1', clientName: 'Atelier Mode', rating: 5, comment: 'Chloé has an incredible eye. The results were beyond our expectations.', date: '2023-11-05' },
    ],
    bookedDates: ['2024-08-20', '2024-08-21', '2024-08-22', '2024-09-18', '2024-09-19', '2024-09-20'],
  },
  {
    id: '1',
    name: 'Anja van der Berg',
    specialties: ['Wedding', 'Portrait'],
    location: 'Amsterdam, NL',
    rating: 4.9,
    reviewCount: 124,
    startingPrice: 1500,
    isVerified: true,
    profileImageUrl: 'https://picsum.photos/seed/anja/400/400',
    bio: 'Capturing timeless moments with an artistic and natural style. Available for high-end private events and executive portraits.',
    portfolioImages: [
      'https://picsum.photos/seed/anja_p1/800/600',
      'https://picsum.photos/seed/anja_p2/600/800',
      'https://picsum.photos/seed/anja_p3/800/800',
      'https://picsum.photos/seed/anja_p4/800/500',
      'https://picsum.photos/seed/anja_p5/500/800',
      'https://picsum.photos/seed/anja_p6/800/600',
    ],
    packages: [
      { id: 'p1', name: 'Executive Portrait', price: 1500, description: 'High end portraiture.', features: ['2 hours', 'Online Gallery', '10 Photos'] },
      { id: 'p2', name: 'Full Day Coverage', price: 3200, description: '10 hours coverage, 500 edited photos.', features: ['10 hours', 'Second Shooter', '500 Photos'] },
    ],
    reviews: [
      { id: 'r1', clientName: 'Sophie & Tom', rating: 5, comment: 'Anja was incredible! She made us feel so comfortable and the photos are breathtaking.', date: '2023-10-15' },
    ],
    bookedDates: ['2024-08-10', '2024-08-11', '2024-09-07', '2024-09-21', '2024-10-05'],
  },
  {
    id: '3',
    name: 'Eva de Wit',
    specialties: ['Family', 'Lifestyle'],
    location: 'Utrecht, NL',
    rating: 4.8,
    reviewCount: 210,
    startingPrice: 600,
    isVerified: false,
    profileImageUrl: 'https://picsum.photos/seed/eva/400/400',
    bio: 'Creating beautiful, light-filled images for lifestyle brands and advertising. My approach is relaxed and fun, capturing genuine connections.',
    portfolioImages: [
      'https://picsum.photos/seed/eva_p1/800/600',
      'https://picsum.photos/seed/eva_p2/600/800',
      'https://picsum.photos/seed/eva_p3/800/500',
    ],
    packages: [
      { id: 'p1', name: 'Brand Lifestyle Session', price: 600, description: '1.5-hour on-location shoot.', features: ['1.5 Hour Session', 'On-location', '50 Edited Photos'] },
    ],
    reviews: [
      { id: 'r1', clientName: 'Organic Kids Co.', rating: 5, comment: 'Eva captured our product line perfectly with kids. The photos are natural and effective.', date: '2023-09-20' },
    ],
    bookedDates: ['2024-08-24', '2024-08-25', '2024-09-14', '2024-09-15', '2024-09-28', '2024-09-29'],
  },
];

export const CATEGORIES: Category[] = [
  { name: 'Corporate', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=60' },
  { name: 'RealEstate', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=60' },
  { name: 'Events', imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=60' },
  { name: 'Fashion', imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=500&q=60' },
  { name: 'Portraits', imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=500&q=60' },
  { name: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=60' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "As a marketing manager, I need reliable photographers for corporate events. framenl has become my go-to resource. The instant quote feature is a lifesaver.",
    author: "David Chen",
    role: "Marketing Manager, TechFlow BV"
  },
  {
    quote: "We needed high-quality architectural shots for our new real estate listings. Sven delivered exceptional work within 24 hours.",
    author: "Sarah de Vries",
    role: "Senior Agent, Makelaars Noord"
  },
  {
    quote: "Finding a fashion photographer who understood our brand identity was crucial. Chloé was the perfect match, found in minutes on this platform.",
    author: "Lucas van den Berg",
    role: "Creative Director, ModeHouse"
  }
];
