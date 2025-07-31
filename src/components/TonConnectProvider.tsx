import React from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class TonConnectErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('TON Connect Error:', error, errorInfo);
    
    // Clear any cached TON Connect data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('tonconnect');
      localStorage.removeItem('ton-connect-storage_bridge-connection');
      localStorage.removeItem('ton-connect-ui_last-selected-wallet-info');
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold mb-2">Connection Error</h2>
            <p className="text-gray-300 mb-6">
              Unable to connect to TON wallet. Please refresh the page and try again.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

interface TonConnectProviderProps {
  children: ReactNode;
}

export const TonConnectProvider: React.FC<TonConnectProviderProps> = ({ children }) => {
  // Use rialcoin.io manifest URL
  const manifestUrl = "https://rialcoin.io/tonconnect-manifest.json";

  return (
    <TonConnectErrorBoundary>
      <TonConnectUIProvider 
        manifestUrl={manifestUrl}
        uiPreferences={{
          theme: THEME.DARK
        }}
        actionsConfiguration={{
          twaReturnUrl: 'https://t.me/RialCoinBot'
        }}
      >
        {children}
      </TonConnectUIProvider>
    </TonConnectErrorBoundary>
  );
};
