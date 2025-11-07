import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-semibold px-6 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: 'bg-[#FF7D6B] text-white hover:bg-[#E86A5A] focus:ring-[#FF7D6B] shadow-sm disabled:bg-gray-300',
    secondary: 'bg-orange-100 text-[#E86A5A] hover:bg-orange-200 focus:ring-[#FF7D6B]',
    ghost: 'text-[#5A6A78] hover:bg-orange-100/50 hover:text-[#E86A5A] focus:ring-[#FF7D6B]',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};