import React, { useState } from 'react';
import { TonConnectButton, useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { handleSendTon } from '../payments/sendTon';
import { handleSendUsdt } from '../payments/sendUsdt';
import { handleSendNot } from '../payments/sendNot';
import './Send.css';

const Send: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const [usdtAmount, setUsdtAmount] = useState<number>(0);

  return (
    <div className="container">
      <TonConnectButton />
      <br />
      <div>
        <span>User-friendly address: {userFriendlyAddress}</span>
        <br />
        <span>Raw address: {rawAddress}</span>
      </div>
      <br />

      {/* USDT Amount Input */}
      <div className="input-group">
        <label htmlFor="usdtAmount">Enter USDT Amount:</label>
        <input
          type="number"
          id="usdtAmount"
          value={usdtAmount}
          onChange={(e) => setUsdtAmount(parseFloat(e.target.value))}
          placeholder="Amount in USDT"
          min="0"
        />
      </div>

      <div className="button-group">
        <button onClick={() => handleSendTon(tonConnectUI)}>Send TON</button>
        <button
          onClick={() => handleSendUsdt(tonConnectUI, userFriendlyAddress, usdtAmount)}
          disabled={usdtAmount <= 0} // Disable if amount is not valid
        >
          Send USDT
        </button>
        <button
          onClick={() => handleSendNot(tonConnectUI, userFriendlyAddress)}
        >
          Send NOT
        </button>
      </div>
    </div>
  );
};

export default Send;
