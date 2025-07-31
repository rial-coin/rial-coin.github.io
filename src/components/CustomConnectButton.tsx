import React, { useState } from "react";
import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";

export const CustomConnectButton: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    if (!userFriendlyAddress) {
      setIsConnecting(true);
      setError(null);
      try {
        // Clear any previous connection data
        localStorage.removeItem('tonconnect');
        localStorage.removeItem('ton-connect-storage_bridge-connection');
        localStorage.removeItem('ton-connect-ui_last-selected-wallet-info');
        
        // Initiate wallet connection
        await tonConnectUI.connectWallet();
      } catch (error: any) {
        console.error("Error connecting wallet:", error);
        
        // Handle different types of errors
        if (error.message?.includes('_TonConnectUIError') || error.message?.includes('Wallet was not connected')) {
          setError("Connection was cancelled. Please try again and approve the connection in your wallet.");
        } else if (error.message?.includes('UnknownError') || error.message?.includes('Reject request')) {
          setError("Wallet connection was rejected. Please try again and accept the connection in your wallet.");
        } else if (error.message?.includes('Bridge')) {
          setError("Connection bridge error. Please check your internet connection and try again.");
        } else if (error.message?.includes('timeout') || error.message?.includes('Timeout')) {
          setError("Connection timeout. Please try again.");
        } else {
          setError("Connection failed. Please ensure you have a TON wallet installed (like Tonkeeper) and try again.");
        }
      } finally {
        setIsConnecting(false);
      }
    } else {
      try {
        // Clear wallet session and prevent automatic reconnection
        localStorage.removeItem("tonconnect");
        localStorage.removeItem('ton-connect-storage_bridge-connection');
        localStorage.removeItem('ton-connect-ui_last-selected-wallet-info');
        tonConnectUI.disconnect();
        setError(null);
        // Don't reload, just let the state update
      } catch (error: any) {
        console.error("Error disconnecting wallet:", error);
        setError("Failed to disconnect wallet.");
      }
    }
  };

  return (
    <div className="space-y-2">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
          <div className="flex items-start justify-between">
            <span>{error}</span>
            <button 
              onClick={() => setError(null)}
              className="ml-2 text-red-300 hover:text-red-100 transition-colors"
              aria-label="Close error message"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {error.includes('Tonkeeper') || error.includes('wallet installed') ? (
            <div className="mt-2 pt-2 border-t border-red-500/20">
              <a 
                href="https://tonkeeper.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-red-300 hover:text-red-100 underline"
              >
                Install Tonkeeper Wallet →
              </a>
            </div>
          ) : null}
        </div>
      )}
      
      {/* Connected Wallet Info */}
      {userFriendlyAddress && !isConnecting && (
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-green-400 font-semibold text-sm">Wallet Connected</div>
                <div className="text-white font-mono text-xs">
                  {userFriendlyAddress.slice(0, 8)}...{userFriendlyAddress.slice(-8)}
                </div>
              </div>
            </div>
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Main Connect/Disconnect Button */}
      <button
        onClick={handleConnect}
        disabled={isConnecting}
        className={`w-full py-4 px-6 text-lg font-bold rounded-2xl transition-all transform hover:scale-[1.02] focus:ring-4 focus:outline-none ${
          isConnecting
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : userFriendlyAddress
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-400 shadow-lg"
            : "bg-gradient-to-r from-primaryColor to-blue-500 text-white hover:from-primaryColor/80 hover:to-blue-600 focus:ring-primaryColor/50 shadow-lg"
        }`}
        aria-label={userFriendlyAddress ? "Disconnect Wallet" : "Connect Wallet"}
      >
        <div className="flex items-center justify-center space-x-3">
          {isConnecting ? (
            <>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Connecting...</span>
            </>
          ) : userFriendlyAddress ? (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Disconnect Wallet</span>
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Connect Wallet</span>
            </>
          )}
        </div>
      </button>

      {/* Retry Button (shows only when there's an error and not connected) */}
      {error && !userFriendlyAddress && !isConnecting && (
        <button
          onClick={() => {
            setError(null);
            handleConnect();
          }}
          className="w-full py-2 px-4 text-sm font-medium rounded-lg bg-gray-600 text-gray-200 hover:bg-gray-500 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
