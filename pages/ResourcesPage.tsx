import React from 'react';

const ResourceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="font-semibold text-lg text-[#2C3E50]">{title}</h3>
        <p className="mt-2 text-sm text-[#5A6A78]">{description}</p>
    </div>
);

export const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Photographer Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                Tools and tips to help you grow your photography business.
            </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ResourceCard title="Guide: Creating a Killer Profile" description="Learn how to optimize your profile to attract more clients and stand out from the crowd." />
            <ResourceCard title="Tutorial: Pricing Your Packages" description="A deep dive into pricing strategies that can help you maximize your income and book more clients." />
            <ResourceCard title="Checklist: Pre-Shoot Client Communication" description="Ensure every shoot goes smoothly with our checklist for communicating with clients beforehand." />
            <ResourceCard title="Article: The Art of the Upsell" description="Discover how to offer valuable add-ons that clients love and that increase your revenue per booking." />
            <ResourceCard title="Webinar: Social Media Marketing for Photographers" description="Watch our recorded webinar on leveraging Instagram and other platforms to build your brand." />
            <ResourceCard title="Download: Model Release Form Template" description="A free, ready-to-use model release form template to protect you and your clients." />
        </div>
      </div>
    </div>
  );
};