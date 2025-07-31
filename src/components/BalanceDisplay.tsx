import React, { useState, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import { getAllBalances, formatBalance, getUsdValue } from '../utils/tonBalances';

interface BalanceDisplayProps {
  onBalanceUpdate?: (usdtBalance: number, rialBalance: number, tonBalance: number) => void;
}

export const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ onBalanceUpdate }) => {
  const userFriendlyAddress = useTonAddress();
  const [balances, setBalances] = useState({
    usdt: 0,
    rial: 0,
    ton: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    if (userFriendlyAddress) {
      fetchBalances();
    }
  }, [userFriendlyAddress]);

  const fetchBalances = async () => {
    if (!userFriendlyAddress) return;
    
    setIsLoading(true);
    try {
      const newBalances = await getAllBalances(userFriendlyAddress);
      
      setBalances(newBalances);
      setLastUpdated(new Date());
      onBalanceUpdate?.(newBalances.usdt, newBalances.rial, newBalances.ton);
    } catch (error) {
      console.error('Error fetching balances:', error);
      // In case of error, keep previous balances
    } finally {
      setIsLoading(false);
    }
  };

  if (!userFriendlyAddress) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-bgDark2/80 to-bgDark3/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-bold text-lg">Your Balances</h3>
          {lastUpdated && (
            <p className="text-secondaryText text-xs">
              Updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
        <button 
          onClick={fetchBalances}
          disabled={isLoading}
          className="p-2 rounded-lg bg-primaryColor/20 text-primaryColor hover:bg-primaryColor/30 transition-all disabled:opacity-50"
          aria-label="Refresh balances"
        >
          <svg className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-4">
        {/* USDT Balance */}
        <div className="flex items-center justify-between p-3 bg-bgDark3/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <div>
              <div className="text-white font-semibold">USDT</div>
              <div className="text-secondaryText text-xs">Tether USD</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">
              {isLoading ? '...' : formatBalance(balances.usdt)}
            </div>
            <div className="text-secondaryText text-xs">
              ≈ ${isLoading ? '...' : formatBalance(getUsdValue(balances.usdt, 'USDT'), 2)}
            </div>
          </div>
        </div>

        {/* RIAL Balance */}
        <div className="flex items-center justify-between p-3 bg-bgDark3/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div>
              <div className="text-white font-semibold">RIAL</div>
              <div className="text-secondaryText text-xs">RIAL Coin</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">
              {isLoading ? '...' : formatBalance(balances.rial)}
            </div>
            <div className="text-secondaryText text-xs">
              ≈ ${isLoading ? '...' : formatBalance(getUsdValue(balances.rial, 'RIAL'), 2)}
            </div>
          </div>
        </div>

        {/* TON Balance */}
        <div className="flex items-center justify-between p-3 bg-bgDark3/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <div>
              <div className="text-white font-semibold">TON</div>
              <div className="text-secondaryText text-xs">Toncoin</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">
              {isLoading ? '...' : formatBalance(balances.ton)}
            </div>
            <div className="text-secondaryText text-xs">
              ≈ ${isLoading ? '...' : formatBalance(getUsdValue(balances.ton, 'TON'), 2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
