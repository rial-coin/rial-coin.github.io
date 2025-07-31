import React from 'react';

interface PercentageSelectorProps {
  balance: number;
  onAmountSelect: (amount: number, percentage: number) => void;
  selectedAmount: number;
  tokenSymbol: string;
}

export const PercentageSelector: React.FC<PercentageSelectorProps> = ({ 
  balance, 
  onAmountSelect, 
  selectedAmount,
  tokenSymbol 
}) => {
  const percentages = [25, 50, 75, 100];

  const handlePercentageClick = (percentage: number) => {
    const amount = (balance * percentage) / 100;
    onAmountSelect(amount, percentage);
  };

  const getSelectedPercentage = () => {
    if (balance === 0) return 0;
    return Math.round((selectedAmount / balance) * 100);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-secondaryText text-sm">Quick Select</span>
        <span className="text-secondaryText text-sm">
          Balance: {balance.toFixed(4)} {tokenSymbol}
        </span>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {percentages.map((percent) => {
          const amount = (balance * percent) / 100;
          const isSelected = getSelectedPercentage() === percent;
          
          return (
            <button
              key={percent}
              onClick={() => handlePercentageClick(percent)}
              disabled={balance === 0}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-primaryColor text-white'
                  : balance === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-primaryColor/20 text-primaryColor hover:bg-primaryColor/30'
              }`}
            >
              {percent}%
            </button>
          );
        })}
      </div>
      
      <div className="text-center">
        <span className="text-secondaryText text-xs">
          Selected: {getSelectedPercentage()}% ({selectedAmount.toFixed(4)} {tokenSymbol})
        </span>
      </div>
    </div>
  );
};
