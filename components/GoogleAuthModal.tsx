
import React from 'react';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAccount: (account: { name: string; email: string }) => void;
}

const mockAccounts = [
  {
    name: 'Mila Janssen',
    email: 'mila.janssen@example.com',
    avatar: 'https://i.pravatar.cc/150?u=mila.janssen@example.com',
  },
  {
    name: 'Noah de Vries',
    email: 'noah.devries@example.com',
    avatar: 'https://i.pravatar.cc/150?u=noah.devries@example.com',
  },
];

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({ isOpen, onClose, onSelectAccount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="google-auth-title">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b text-center">
            <svg className="w-8 h-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.657-11.303-8.591l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C41.389 36.197 44 30.651 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
            <h2 id="google-auth-title" className="text-xl font-semibold">Choose an account</h2>
            <p className="text-sm text-gray-500 mt-1">to continue to framenl</p>
        </div>
        <div className="py-2">
            {mockAccounts.map(account => (
                <div 
                    key={account.email} 
                    onClick={() => onSelectAccount(account)} 
                    className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter') onSelectAccount(account); }}
                >
                    <img src={account.avatar} alt={`Avatar for ${account.name}`} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold text-sm">{account.name}</p>
                        <p className="text-xs text-gray-500">{account.email}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="p-4 bg-gray-50 text-center text-xs text-gray-500 border-t">
          To continue, Google will share your name, email address, and profile picture with framenl.
        </div>
      </div>
    </div>
  );
};