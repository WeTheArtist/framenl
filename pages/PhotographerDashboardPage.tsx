
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/Button';
import { CameraIcon, PlusCircleIcon } from '../components/IconComponents';
import { Calendar } from '../components/Calendar';
import type { Photographer, BookingPackage } from '../types';

interface PhotographerDashboardPageProps {
    photographer: Photographer;
    onSave: (updatedPhotographer: Photographer) => void;
}

const DashboardSection: React.FC<{ title: string; children: React.ReactNode; description?: string }> = ({ title, description, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200/80">
        <h2 className="text-2xl font-bold text-[#2C3E50]">{title}</h2>
        {description && <p className="mt-1 text-sm text-[#5A6A78]">{description}</p>}
        <div className="mt-6">{children}</div>
    </div>
);

const InputField: React.FC<{ label: string; id: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder?: string; required?: boolean }> = ({ label, id, name, value, onChange, type = 'text', placeholder, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-[#2C3E50]">{label}</label>
        <input type={type} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
    </div>
);

const allSpecialties = ['Wedding', 'Portrait', 'Corporate', 'Family', 'Events', 'Fashion', 'Real Estate', 'Newborn', 'Architecture', 'Concerts'];
const MAX_PORTFOLIO_IMAGES = 30;

export const PhotographerDashboardPage: React.FC<PhotographerDashboardPageProps> = ({ photographer, onSave }) => {
    const [bookedDates, setBookedDates] = useState(new Set(photographer.bookedDates));
    const [profileImagePreview, setProfileImagePreview] = useState<string | null>(photographer.profileImageUrl);
    const [portfolioPreviews, setPortfolioPreviews] = useState<string[]>(photographer.portfolioImages);
    
    const [formData, setFormData] = useState({
        fullName: photographer.name,
        location: photographer.location,
        bio: photographer.bio,
        specialties: new Set<string>(photographer.specialties),
        website: photographer.website ?? '',
        instagram: photographer.instagram ?? '',
        facebook: photographer.facebook ?? '',
        tiktok: photographer.tiktok ?? '',
        youtube: photographer.youtube ?? '',
        twitter: photographer.twitter ?? '',
        otherSocial: photographer.otherSocial ?? '',
        packages: JSON.parse(JSON.stringify(photographer.packages)) as BookingPackage[], // Deep copy
    });

    const profileFileInputRef = useRef<HTMLInputElement>(null);
    const portfolioFileInputRef = useRef<HTMLInputElement>(null);

    // Effect for cleaning up Object URLs
    useEffect(() => {
        return () => {
            if (profileImagePreview && profileImagePreview.startsWith('blob:')) {
                URL.revokeObjectURL(profileImagePreview);
            }
            portfolioPreviews.forEach(url => {
                if (url.startsWith('blob:')) {
                    URL.revokeObjectURL(url);
                }
            });
        };
    }, [profileImagePreview, portfolioPreviews]);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const newSpecialties = new Set(prev.specialties);
            if (checked) {
                newSpecialties.add(value);
            } else {
                newSpecialties.delete(value);
            }
            return { ...prev, specialties: newSpecialties };
        });
    };
    
    const handlePackageChange = (index: number, field: keyof BookingPackage, value: string | number | string[]) => {
         setFormData(prev => {
            const newPackages = [...prev.packages];
            // @ts-ignore
            newPackages[index][field] = value;
            return { ...prev, packages: newPackages };
        });
    };
    
    const handlePackageFeatureChange = (pkgIndex: number, value: string) => {
         setFormData(prev => {
            const newPackages = [...prev.packages];
            newPackages[pkgIndex].features = value.split('\n');
            return { ...prev, packages: newPackages };
        });
    }

    const addPackage = () => {
        setFormData(prev => ({
            ...prev,
            packages: [...prev.packages, { id: `new_${Date.now()}`, name: '', description: '', price: 0, features: [] }]
        }));
    };

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

    const handleProfileImageUpload = () => {
        profileFileInputRef.current?.click();
    };

    const handleProfileFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        // FIX: Added robust type guard to ensure 'file' is a valid image File.
        if (file instanceof File && file.type.startsWith('image/')) {
            if (profileImagePreview && profileImagePreview.startsWith('blob:')) {
                URL.revokeObjectURL(profileImagePreview);
            }
            const newPreviewUrl = URL.createObjectURL(file);
            setProfileImagePreview(newPreviewUrl);
        }
    };

     const handlePortfolioUpload = () => {
        portfolioFileInputRef.current?.click();
    };

    const handlePortfolioFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImageUrls = Array.from(files)
                // FIX: Added robust type guard to ensure 'file' is a valid image File.
                .filter((file): file is File => file instanceof File && file.type.startsWith('image/'))
                .map(file => URL.createObjectURL(file));
            
            setPortfolioPreviews(prev => [...prev, ...newImageUrls].slice(0, MAX_PORTFOLIO_IMAGES));
        }
    };
    
    const handleSaveProfile = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedPhotographer: Photographer = {
            ...photographer, // Keep original non-editable data like ID, reviews, rating
            name: formData.fullName,
            location: formData.location,
            bio: formData.bio,
            specialties: Array.from(formData.specialties),
            packages: formData.packages,
            bookedDates: Array.from(bookedDates),
            profileImageUrl: profileImagePreview || photographer.profileImageUrl,
            portfolioImages: portfolioPreviews,
            website: formData.website,
            instagram: formData.instagram,
            facebook: formData.facebook,
            tiktok: formData.tiktok,
            youtube: formData.youtube,
            twitter: formData.twitter,
            otherSocial: formData.otherSocial,
        };
        onSave(updatedPhotographer);
        alert("Profile saved! You will now be redirected to the search page to see your changes.");
    };


    return (
        <div className="bg-[#FFF9F5]">
            <form onSubmit={handleSaveProfile}>
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
                                <InputField label="Full Name" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="e.g., Anja van der Berg" required />
                                <InputField label="Location" id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g., Amsterdam, NL" required />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="bio" className="block text-sm font-medium text-[#2C3E50]">Bio / About Me</label>
                                <textarea id="bio" name="bio" rows={5} value={formData.bio} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" placeholder="Tell clients about your style, experience, and passion..."></textarea>
                            </div>
                        </DashboardSection>
                        
                        <DashboardSection title="Online Presence" description="Link to your website and social media to showcase more of your work.">
                             <div className="space-y-6">
                                <InputField label="Portfolio Website" id="website" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://yourwebsite.com" />
                                <InputField label="Instagram Profile" id="instagram" name="instagram" value={formData.instagram} onChange={handleInputChange} placeholder="https://instagram.com/yourhandle" />
                                <InputField label="Facebook Page" id="facebook" name="facebook" value={formData.facebook} onChange={handleInputChange} placeholder="https://facebook.com/yourpage" />
                                <InputField label="TikTok" id="tiktok" name="tiktok" value={formData.tiktok} onChange={handleInputChange} placeholder="https://tiktok.com/@yourhandle" />
                                <InputField label="YouTube" id="youtube" name="youtube" value={formData.youtube} onChange={handleInputChange} placeholder="https://youtube.com/c/yourchannel" />
                                <InputField label="Twitter" id="twitter" name="twitter" value={formData.twitter} onChange={handleInputChange} placeholder="https://twitter.com/yourhandle" />
                                <InputField label="Other" id="otherSocial" name="otherSocial" value={formData.otherSocial} onChange={handleInputChange} placeholder="Another relevant link" />
                             </div>
                        </DashboardSection>

                        <DashboardSection title="Manage Your Availability" description="Click on a date to mark it as booked. Click again to make it available.">
                            <div className="flex justify-center">
                                <Calendar bookedDates={bookedDates} onDateClick={handleDateClick} interactive={true} />
                            </div>
                        </DashboardSection>

                        <DashboardSection title="Specialties" description="Select all that apply. This helps clients find you in search.">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {allSpecialties.map(s => (
                                    <div key={s} className="flex items-center">
                                        <input id={`specialty-${s}`} name="specialty" type="checkbox" value={s} checked={formData.specialties.has(s)} onChange={handleSpecialtyChange} className="h-4 w-4 rounded border-gray-300 text-[#FF7D6B] focus:ring-[#FF7D6B]" />
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
                                        <div className="w-24 h-24 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
                                            {profileImagePreview ? (
                                                <img src={profileImagePreview} alt="Profile preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <CameraIcon className="w-10 h-10 text-gray-400" />
                                            )}
                                        </div>
                                        <input type="file" ref={profileFileInputRef} onChange={handleProfileFileChange} className="hidden" accept="image/*"/>
                                        <Button type="button" variant="secondary" onClick={handleProfileImageUpload}>Upload Image</Button>
                                    </div>
                            </div>
                        </div>
                        <hr className="my-8 border-gray-200" />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-1">
                                    <h3 className="font-semibold text-[#2C3E50]">Portfolio Gallery</h3>
                                    <p className="text-sm text-[#5A6A78] mt-1">Upload up to {MAX_PORTFOLIO_IMAGES} images that showcase your best work.</p>
                                </div>
                                <div className="md:col-span-2">
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                        {[...Array(MAX_PORTFOLIO_IMAGES)].map((_, i) => {
                                            const src = portfolioPreviews[i];
                                            if (src) {
                                                return (
                                                    <div key={i} className="aspect-square bg-gray-100 border rounded-lg flex items-center justify-center overflow-hidden">
                                                        <img src={src} alt={`Portfolio image ${i+1}`} className="w-full h-full object-cover" />
                                                    </div>
                                                );
                                            }
                                            return (
                                                <button
                                                    type="button"
                                                    key={`placeholder-${i}`}
                                                    onClick={handlePortfolioUpload}
                                                    className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 hover:border-gray-400 transition-colors"
                                                    aria-label="Upload portfolio image"
                                                    disabled={portfolioPreviews.length >= MAX_PORTFOLIO_IMAGES}
                                                >
                                                    <CameraIcon className="w-8 h-8 text-gray-400" />
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <input type="file" ref={portfolioFileInputRef} onChange={handlePortfolioFileChange} className="hidden" accept="image/*" multiple/>
                                    <Button type="button" variant="secondary" className="mt-4 w-full" onClick={handlePortfolioUpload} disabled={portfolioPreviews.length >= MAX_PORTFOLIO_IMAGES}>Upload More...</Button>
                                </div>
                            </div>
                        </DashboardSection>

                        <DashboardSection title="Packages & Pricing" description="Define your offerings. You can add multiple packages.">
                            <div className="space-y-8">
                                {formData.packages.map((pkg, index) => (
                                    <div key={pkg.id} className="space-y-6 bg-gray-50/70 p-6 rounded-lg border border-gray-200">
                                        <h3 className="font-semibold text-lg text-[#2C3E50]">Package {index + 1}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-[#2C3E50]">Package Name</label>
                                                <input value={pkg.name} onChange={e => handlePackageChange(index, 'name', e.target.value)} type="text" placeholder="e.g., Full Day Wedding" className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
                                            </div>
                                            <div>
                                                 <label className="block text-sm font-medium text-[#2C3E50]">Price (€)</label>
                                                <input value={pkg.price} onChange={e => handlePackageChange(index, 'price', Number(e.target.value))} type="number" placeholder="e.g., 3200" className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#2C3E50]">Description</label>
                                            <textarea value={pkg.description} onChange={e => handlePackageChange(index, 'description', e.target.value)} rows={2} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" placeholder="e.g., 10 hours coverage, 500 edited photos..."></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#2C3E50]">Features (one per line)</label>
                                            <textarea value={pkg.features.join('\n')} onChange={e => handlePackageFeatureChange(index, e.target.value)} rows={3} className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" placeholder="10 hours coverage&#10;500+ Edited Photos&#10;Online Gallery"></textarea>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button type="button" variant="ghost" className="mt-4" onClick={addPackage}>
                                <PlusCircleIcon className="w-5 h-5 mr-2" /> Add Another Package
                            </Button>
                        </DashboardSection>
                        
                        <div className="flex justify-end pt-4">
                            <Button type="submit" variant="primary" className="text-lg px-10 !py-3 font-bold">Save Profile</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
