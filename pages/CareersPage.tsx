import React from 'react';

const JobOpening: React.FC<{ title: string, location: string, type: string }> = ({ title, location, type }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/80 flex items-center justify-between">
        <div>
            <h3 className="font-semibold text-lg text-[#2C3E50]">{title}</h3>
            <p className="text-sm text-[#5A6A78] mt-1">{location} &bull; {type}</p>
        </div>
        <button className="text-sm font-semibold text-[#FF7D6B] hover:text-[#E86A5A]">View Details</button>
    </div>
);


export const CareersPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Work With Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5A6A78]">
                Join our mission to connect creativity and opportunity. We're a small, ambitious team looking for passionate people.
            </p>
        </header>

         <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[#2C3E50]">Open Positions</h2>
            <div className="space-y-4">
                <JobOpening title="Senior Frontend Engineer (React)" location="Amsterdam / Remote" type="Full-time" />
                <JobOpening title="Lead Product Designer (UX/UI)" location="Amsterdam" type="Full-time" />
                <JobOpening title="Photographer Community Manager" location="Amsterdam" type="Part-time" />
            </div>
            <div className="mt-12 text-center bg-[#FFF9F5] p-8 rounded-2xl">
                 <h3 className="font-semibold text-xl text-[#2C3E50]">Don't see your role?</h3>
                 <p className="text-[#5A6A78] mt-2">We're always looking for talented people. If you think you'd be a great fit, send your resume and a note to <a href="mailto:careers@framenl.com" className="text-[#FF7D6B] font-medium hover:text-[#E86A5A]">careers@framenl.com</a>.</p>
            </div>
        </div>
      </div>
    </div>
  );
};