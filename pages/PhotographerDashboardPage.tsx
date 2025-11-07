import React, { useState } from 'react';
import { Button } from '../components/Button';
import { CameraIcon, PlusCircleIcon, CalendarIcon } from '../components/IconComponents';
import { Calendar } from '../components/Calendar';
import type { Photographer } from '../types';

interface PhotographerDashboardPageProps {
    photographer: Photographer; // Assuming we pass the current photographer's data
}

const DashboardSection: React.FC<{ title: string; children: React.ReactNode; description?: string }> = ({ title, description, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200/80">
        <h2 className="text-2xl font-bold text-[#2C3E50]">{title}</h2>
        {description && <p className="mt-1 text-sm text-[#5A6A78]">{description}</p>}
        <div className="mt-6">{children}</div>
    </div>
);

const InputField: React.FC<{ label: string; id: string; type?: string; placeholder?: string; required?: boolean }> = ({ label, id, type = 'text', placeholder, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-[#2C3E50]">{label}</label>
        <input type={type} id={id} name={id} placeholder={placeholder} required={required} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
    </div>
);

const specialties = ['Wedding', 'Portrait', 'Corporate', 'Family', 'Events', 'Fashion', 'Real Estate', 'Newborn', 'Architecture', 'Concerts'];

export const PhotographerDashboardPage: React.FC<PhotographerDashboardPageProps> = ({ photographer }) => {
    const [bookedDates, setBookedDates] = useState(new Set(photographer.bookedDates));

    const handleDateClick = (date: string) => {
        setBookedDates(prev => {
            const newDates = new Set(prev);
            if (newDates.has(date)) {
                newDates.delete(date);
            } else {
                newDates.add(date);
            }
            return newDates;
        });
    };

    return (
        <div className="bg-[#FFF9F5]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Photographer Dashboard</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                        Create and manage your professional profile to connect with clients across the Netherlands.
                    </p>
                </header>

                <div className="space-y-8 max-w-4xl mx-auto">
                    <DashboardSection title="Your Information" description="This is the core information clients will see first.">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Full Name" id="fullName" placeholder="e.g., Anja van der Berg" required />
                            <InputField label="Location" id="location" placeholder="e.g., Amsterdam, NL" required />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="bio" className="block text-sm font-medium text-[#2C3E50]">Bio / About Me</label>
                            <textarea id="bio" name="bio" rows={5} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" placeholder="Tell clients about your style, experience, and passion..."></textarea>
                        </div>
                    </DashboardSection>

                    <DashboardSection title="Manage Your Availability" description="Click on a date to mark it as booked. Click again to make it available.">
                        <div className="flex justify-center">
                            <Calendar bookedDates={bookedDates} onDateClick={handleDateClick} interactive={true} />
                        </div>
                    </DashboardSection>

                    <DashboardSection title="Specialties" description="Select all that apply. This helps clients find you in search.">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                           {specialties.map(s => (
                                <div key={s} className="flex items-center">
                                    <input id={`specialty-${s}`} name="specialty" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#FF7D6B] focus:ring-[#FF7D6B]" />
                                    <label htmlFor={`specialty-${s}`} className="ml-3 text-sm text-[#5A6A78]">{s}</label>
                                </div>
                           ))}
                        </div>
                    </DashboardSection>

                    <DashboardSection title="Portfolio & Profile Image" description="Your images are your strongest selling point. Use high-quality work.">
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                           <div className="md:col-span-1">
                                <h3 className="font-semibold text-[#2C3E50]">Profile Picture</h3>
                                <p className="text-sm text-[#5A6A78] mt-1">A professional headshot builds trust.</p>
                           </div>
                           <div className="md:col-span-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 rounded-full bg-gray-100 border flex items-center justify-center">
                                        <CameraIcon className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <Button variant="secondary">Upload Image</Button>
                                </div>
                           </div>
                       </div>
                       <hr className="my-8 border-gray-200" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-semibold text-[#2C3E50]">Portfolio Gallery</h3>
                                <p className="text-sm text-[#5A6A78] mt-1">Upload up to 12 images that showcase your best work.</p>
                            </div>
                            <div className="md:col-span-2">
                                <div className="grid grid-cols-3 gap-4">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="aspect-square bg-gray-100 border rounded-lg flex items-center justify-center">
                                            <CameraIcon className="w-8 h-8 text-gray-400" />
                                        </div>
                                    ))}
                                </div>
                                <Button variant="secondary" className="mt-4 w-full">Upload More...</Button>
                            </div>
                        </div>
                    </DashboardSection>

                    <DashboardSection title="Packages & Pricing" description="Define your offerings. You can add multiple packages.">
                        <div className="space-y-6 bg-gray-50/70 p-6 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-lg text-[#2C3E50]">Package 1</h3>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-2"><InputField label="Package Name" id="pkg-name-1" placeholder="e.g., Full Day Wedding"/></div>
                                <div><InputField label="Price (€)" id="pkg-price-1" type="number" placeholder="e.g., 3200"/></div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#2C3E50]">Description</label>
                                <textarea rows={2} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" placeholder="e.g., 10 hours coverage, 500 edited photos..."></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#2C3E50]">Features (one per line)</label>
                                <textarea rows={3} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" placeholder="10 hours coverage&#10;500+ Edited Photos&#10;Online Gallery"></textarea>
                            </div>
                        </div>
                        <Button variant="ghost" className="mt-4">
                            <PlusCircleIcon className="w-5 h-5 mr-2" /> Add Another Package
                        </Button>
                    </DashboardSection>
                    
                    <div className="flex justify-end pt-4">
                        <Button variant="primary" className="text-lg px-10 !py-3 font-bold">Save Profile</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};