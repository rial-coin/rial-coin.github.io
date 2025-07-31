import { TonConnectProvider } from "./TonConnectProvider";
import { WalletCheck } from "./WalletCheck";
import Receive from "./Receive";

export const Sell = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <WalletCheck>
          <TonConnectProvider>
            <Receive />
          </TonConnectProvider>
        </WalletCheck>
      </div>
    </section>
  );
};
