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
      
      {/* Main Connect Button */}
      <button
        onClick={handleConnect}
        disabled={isConnecting}
        className={`w-full py-4 px-6 text-lg font-bold rounded-2xl transition-all transform hover:scale-[1.02] focus:ring-4 focus:outline-none ${
          isConnecting
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : userFriendlyAddress
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-400"
            : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 focus:ring-purple-400"
        }`}
        aria-label={userFriendlyAddress ? "Disconnect Wallet" : "Connect Wallet"}
      >
        <div className="flex items-center justify-center space-x-3">
          {isConnecting ? (
            <>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span>{userFriendlyAddress ? "Disconnect Wallet" : "Connect Wallet"}</span>
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
