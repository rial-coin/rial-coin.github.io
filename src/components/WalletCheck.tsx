import React, { useState, useEffect } from 'react';

interface WalletCheckProps {
  children: React.ReactNode;
}

export const WalletCheck: React.FC<WalletCheckProps> = ({ children }) => {
  const [hasWallet, setHasWallet] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkWallet = async () => {
      try {
        // Check if running in browser
        if (typeof window === 'undefined') {
          setHasWallet(true);
          setIsChecking(false);
          return;
        }

        // Wait a bit for wallets to inject
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // For development, always allow connection
        if (window.location.hostname === 'localhost') {
          setHasWallet(true);
          setIsChecking(false);
          return;
        }

        // Check for common TON wallets
        const hasTonkeeper = !!(window as any).tonkeeper;
        const hasTonhub = !!(window as any).tonhub;
        const hasInjectedProvider = !!(window as any).ton;
        
        const walletExists = hasTonkeeper || hasTonhub || hasInjectedProvider;

        setHasWallet(walletExists || true); // Default to true for now
        setIsChecking(false);
      } catch (error) {
        console.error('Error checking for wallet:', error);
        setHasWallet(true); // Default to true to allow connection attempt
        setIsChecking(false);
      }
    };

    checkWallet();
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Checking for TON wallet...</p>
        </div>
      </div>
    );
  }

  if (hasWallet === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold mb-2">TON Wallet Required</h2>
          <p className="text-gray-300 mb-6">
            To use this feature, please install a TON wallet browser extension like Tonkeeper or Tonhub.
          </p>
          <div className="space-y-3">
            <a 
              href="https://tonkeeper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Install Tonkeeper
            </a>
            <button 
              onClick={() => window.location.reload()}
              className="block w-full bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              Refresh & Check Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
