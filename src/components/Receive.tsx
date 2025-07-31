import React, { useState } from "react";
import { TonConnectButton, useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";
import { handleSendRial } from "../payments/sendRial";
import { CustomConnectButton } from "./CustomConnectButton";
import { BalanceDisplay } from "./BalanceDisplay";
import { PercentageSelector } from "./PercentageSelector";

const Receive: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const [rialAmount, setRialAmount] = useState<number>(0);
  const [balances, setBalances] = useState({
    usdt: 0,
    rial: 0,
    ton: 0
  });

  const handleBalanceUpdate = (usdtBalance: number, rialBalance: number, tonBalance: number) => {
    setBalances({
      usdt: usdtBalance,
      rial: rialBalance,
      ton: tonBalance
    });
  };

  const handleAmountSelect = (amount: number, percentage: number) => {
    setRialAmount(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bgDark1 via-bgDark2 to-bgDark3 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Sell <span className="text-red-400">RIAL</span>
          </h1>
          <p className="text-secondaryText text-lg md:text-xl">
            Convert your RIAL tokens back to USDT instantly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Trading Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-bgDark2/80 to-bgDark3/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              {/* Trading Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Sell</h2>
                <div className="flex space-x-2">
                  <button 
                    className="p-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                    aria-label="Settings"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* From Token Section (RIAL) */}
              <div className="space-y-6">
                <div className="bg-bgDark3/50 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-secondaryText text-sm">From</span>
                    <span className="text-secondaryText text-sm">
                      Balance: {balances.rial.toFixed(2)} RIAL
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-bgDark2 rounded-xl px-4 py-3 min-w-max">
                      <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">R</span>
                      </div>
                      <span className="text-white font-semibold">RIAL</span>
                      <svg className="w-4 h-4 text-secondaryText" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      value={rialAmount}
                      onChange={(e) => setRialAmount(parseFloat(e.target.value) || 0)}
                      placeholder="0.0"
                      className="flex-1 bg-transparent text-white text-2xl font-semibold placeholder-secondaryText focus:outline-none text-right"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondaryText text-sm">≈ ${rialAmount || 0}</span>
                    </div>
                    {/* Percentage Selector - only show when wallet is connected and has RIAL balance */}
                    {userFriendlyAddress && balances.rial > 0 && (
                      <PercentageSelector
                        balance={balances.rial}
                        onAmountSelect={handleAmountSelect}
                        selectedAmount={rialAmount}
                        tokenSymbol="RIAL"
                      />
                    )}
                  </div>
                </div>

                {/* Swap Arrow */}
                <div className="flex justify-center">
                  <button 
                    className="p-3 bg-bgDark3 rounded-xl border border-white/10 hover:bg-bgDark2 transition-all group"
                    aria-label="Swap tokens"
                  >
                    <svg className="w-6 h-6 text-red-400 group-hover:rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* To Token Section (USDT) */}
                <div className="bg-bgDark3/50 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-secondaryText text-sm">To</span>
                    <span className="text-secondaryText text-sm">Balance: 0.00</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-bgDark2 rounded-xl px-4 py-3 min-w-max">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">U</span>
                      </div>
                      <span className="text-white font-semibold">USDT</span>
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-white text-2xl font-semibold">
                        {rialAmount || 0}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-secondaryText text-sm">≈ ${rialAmount || 0}</span>
                  </div>
                </div>

                {/* Exchange Rate */}
                <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-medium">Exchange Rate</span>
                    <span className="text-white">1 RIAL = 1 USDT</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-secondaryText text-sm">Network Fee</span>
                    <span className="text-white text-sm">~0.01 TON</span>
                  </div>
                </div>

                {/* Wallet Connect / Sell Button */}
                <div className="space-y-4">
                  {!userFriendlyAddress ? (
                    <CustomConnectButton />
                  ) : (
                    <button
                      onClick={() => handleSendRial(tonConnectUI, userFriendlyAddress, rialAmount)}
                      disabled={rialAmount <= 0}
                      className={`w-full py-4 rounded-2xl text-lg font-bold transition-all transform ${
                        rialAmount > 0
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:scale-[1.02] hover:shadow-lg shadow-red-500/25"
                          : "bg-bgDark4 text-secondaryText cursor-not-allowed"
                      }`}
                    >
                      {rialAmount > 0 ? "Sell Now" : "Enter Amount"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Balance Display - shows when wallet is connected */}
            {userFriendlyAddress && (
              <BalanceDisplay onBalanceUpdate={handleBalanceUpdate} />
            )}

            {/* Wallet Status */}
            {userFriendlyAddress && (
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-green-400 font-semibold">Wallet Connected</h3>
                    <p className="text-green-300/70 text-sm">Ready to sell</p>
                  </div>
                </div>
                <div className="bg-bgDark3/50 rounded-lg p-3">
                  <p className="text-xs text-secondaryText mb-1">Address</p>
                  <p className="text-white text-sm font-mono">
                    {userFriendlyAddress.slice(0, 6)}...{userFriendlyAddress.slice(-6)}
                  </p>
                </div>
              </div>
            )}

            {/* Selling Info */}
            <div className="bg-gradient-to-br from-bgDark2/80 to-bgDark3/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Selling Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-secondaryText">You will receive</span>
                  <span className="text-white font-semibold">{rialAmount || 0} USDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondaryText">Network Fee</span>
                  <span className="text-white font-semibold">~0.01 TON</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondaryText">Rate</span>
                  <span className="text-green-400 font-semibold">1:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondaryText">Estimated Time</span>
                  <span className="text-white font-semibold">~30 seconds</span>
                </div>
              </div>
            </div>

            {/* Portfolio Stats */}
            <div className="bg-gradient-to-br from-bgDark2/80 to-bgDark3/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Your Portfolio</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-secondaryText">RIAL Balance</span>
                  <span className="text-white font-semibold">0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondaryText">Total Value</span>
                  <span className="text-white font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondaryText">Profit/Loss</span>
                  <span className="text-green-400 font-semibold">+$0.00</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-bgDark2/80 to-bgDark3/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="/buy"
                  className="block w-full py-3 px-4 bg-green-500/20 text-green-400 rounded-xl border border-green-500/30 hover:bg-green-500/30 transition-all text-center font-medium"
                >
                  Buy RIAL
                </a>
                <button className="w-full py-3 px-4 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30 hover:bg-blue-500/30 transition-all font-medium">
                  View History
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-gradient-to-br from-bgDark2/80 to-bgDark3/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Recent Sales</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 bg-bgDark3/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-secondaryText">Sell</span>
                  </div>
                  <span className="text-white">50 RIAL → 50 USDT</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-bgDark3/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-secondaryText">Sell</span>
                  </div>
                  <span className="text-white">25 RIAL → 25 USDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receive;
