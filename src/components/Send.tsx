import React, { useState } from "react";
import { TonConnectButton, useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";
import { handleSendUsdt } from "../payments/sendUsdt";

const Send: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const [usdtAmount, setUsdtAmount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center text-primaryText font-Inter p-6">
      {/* Header */}
 

      {/* Wallet Connect Button */}
      <div className="mb-6">
        <TonConnectButton />
      </div>

      {/* Address Display (Only if Connected) */}
      {userFriendlyAddress && rawAddress ? (
        <section className="bg-bgDark2 shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-primaryColor mb-4">
            Wallet Information
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold">User-friendly Address:</p>
              <div className="mt-2 p-2 bg-bgDark3 rounded-md border border-mainBorder overflow-x-auto scrollbar-thin scrollbar-thumb-primaryColor scrollbar-track-bgDark3 text-sm text-secondaryText">
                <span className="whitespace-nowrap">{userFriendlyAddress}</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Raw Address:</p>
              <div className="mt-2 p-2 bg-bgDark3 rounded-md border border-mainBorder overflow-x-auto scrollbar-thin scrollbar-thumb-primaryColor scrollbar-track-bgDark3 text-sm text-secondaryText">
                <span className="whitespace-nowrap">{rawAddress}</span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="bg-bgDark3 text-secondaryText shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <p>Please connect your wallet to see wallet information.</p>
        </div>
      )}

      {/* USDT Input and Send Button */}
      <section className="bg-bgDark2 shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
        <h2 className="text-xl font-semibold text-primaryColor mb-4">Send USDT</h2>
        <div className="mb-4">
          <label
            htmlFor="usdtAmount"
            className="block text-lg font-medium mb-2"
          >
            Enter USDT Amount:
          </label>
          <input
            type="number"
            id="usdtAmount"
            value={usdtAmount}
            onChange={(e) => setUsdtAmount(parseFloat(e.target.value))}
            placeholder="Amount in USDT"
            min="0"
            className="w-full px-4 py-2 border border-mainBorder bg-bgDark3 text-primaryText rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
          />
        </div>
        <button
          onClick={() => handleSendUsdt(tonConnectUI, userFriendlyAddress, usdtAmount)}
          disabled={!userFriendlyAddress || usdtAmount <= 0}
          className={`w-full px-6 py-3 rounded-md text-lg font-medium transition ${
            userFriendlyAddress && usdtAmount > 0
              ? "bg-primaryColor text-primaryText hover:bg-secondaryColor focus:ring-2 focus:ring-primaryColor"
              : "bg-bgDark3 text-secondaryText cursor-not-allowed"
          }`}
        >
          Send USDT
        </button>
      </section>
    </div>
  );
};

export default Send;
