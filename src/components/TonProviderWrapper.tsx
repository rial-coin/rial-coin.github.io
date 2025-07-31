import React from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

interface TonProviderWrapperProps {
  children: React.ReactNode;
}

export const TonProviderWrapper: React.FC<TonProviderWrapperProps> = ({ children }) => {
  return (
    <TonConnectUIProvider manifestUrl="https://rialcoin.io/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
};
