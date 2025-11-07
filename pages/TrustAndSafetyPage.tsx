import React from 'react';

const InfoCard: React.FC<{ title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/80">
        <h3 className="text-xl font-semibold text-[#2C3E50]">{title}</h3>
        <p className="mt-2 text-[#5A6A78]">{children}</p>
    </div>
);

export const TrustAndSafetyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Trust & Safety</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                Your peace of mind is our top priority. Here's how we work to keep you safe.
            </p>
        </header>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard title="Verified Photographers">
                Look for the verified badge on profiles. It means we've confirmed their identity and professional credentials, so you can book with confidence.
            </InfoCard>
             <InfoCard title="Secure Payments">
                All payments are processed through a secure, encrypted system. Your financial details are never shared with photographers.
            </InfoCard>
             <InfoCard title="Authentic Reviews">
                Read genuine reviews from past clients to make informed decisions. We verify that all reviews come from actual bookings.
            </InfoCard>
             <InfoCard title="Dedicated Support">
                Our support team is here to help you with any questions or issues that may arise during your booking process. We've got your back.
            </InfoCard>
        </div>
      </div>
    </div>
  );
};