import React from "react";
import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";

export const WalletInfo: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();

  const handleDisconnect = async () => {
    try {
      localStorage.removeItem("tonconnect");
      localStorage.removeItem('ton-connect-storage_bridge-connection');
      localStorage.removeItem('ton-connect-ui_last-selected-wallet-info');
      await tonConnectUI.disconnect();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  if (!userFriendlyAddress) {
    return null;
  }

  return (
    <div className="flex items-center space-x-3 bg-green-500/20 border border-green-400/30 rounded-xl px-3 py-2">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-xs font-medium hidden sm:block">Connected</span>
      </div>
      
      <div className="text-white font-mono text-xs">
        {userFriendlyAddress.slice(0, 4)}...{userFriendlyAddress.slice(-4)}
      </div>
      
      <button
        onClick={handleDisconnect}
        className="p-1 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all"
        title="Disconnect Wallet"
        aria-label="Disconnect Wallet"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  );
};
