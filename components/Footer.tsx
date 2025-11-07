import React from 'react';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page; onNavigate: (page: Page) => void; children: React.ReactNode }> = ({ page, onNavigate, children }) => (
    <li>
        <span onClick={() => onNavigate(page)} className="cursor-pointer hover:text-[#FF7D6B] transition-colors">{children}</span>
    </li>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">FrameNL</h3>
            <p className="text-sm text-gray-300">Connecting talent with moments.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <FooterLink page="search" onNavigate={onNavigate}>Find Photographers</FooterLink>
                <FooterLink page="howItWorks" onNavigate={onNavigate}>How It Works</FooterLink>
                <FooterLink page="trustAndSafety" onNavigate={onNavigate}>Trust & Safety</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Photographers</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <FooterLink page="photographerDashboard" onNavigate={onNavigate}>Join Our Community</FooterLink>
                <FooterLink page="pricing" onNavigate={onNavigate}>Pricing</FooterLink>
                <FooterLink page="resources" onNavigate={onNavigate}>Resources</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <FooterLink page="about" onNavigate={onNavigate}>About Us</FooterLink>
                <FooterLink page="contact" onNavigate={onNavigate}>Contact</FooterLink>
                <FooterLink page="careers" onNavigate={onNavigate}>Careers</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FrameNL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};