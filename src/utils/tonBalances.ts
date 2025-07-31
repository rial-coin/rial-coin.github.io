// TON blockchain API utilities

export interface TokenBalance {
  balance: number;
  symbol: string;
  decimals: number;
}

export interface WalletBalances {
  ton: number;
  usdt: number;
  rial: number;
}

// TON Center API base URL
const TON_API_BASE = 'https://toncenter.com/api/v2';

// Known token addresses on TON
export const TOKEN_ADDRESSES = {
  USDT: 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs', // Real USDT on TON
  RIAL: 'YOUR_RIAL_CONTRACT_ADDRESS' // Replace with actual RIAL contract address
};

/**
 * Fetch TON balance for an address
 */
export async function getTonBalance(address: string): Promise<number> {
  try {
    const response = await fetch(`${TON_API_BASE}/getAddressInformation?address=${address}`);
    const data = await response.json();
    
    if (data.ok && data.result) {
      // Convert from nanotons to TON (1 TON = 10^9 nanotons)
      return parseInt(data.result.balance) / 1_000_000_000;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching TON balance:', error);
    return 0;
  }
}

/**
 * Get jetton wallet address for a user
 */
async function getJettonWalletAddress(jettonMaster: string, userAddress: string): Promise<string | null> {
  try {
    const response = await fetch(
      `${TON_API_BASE}/runGetMethod?` +
      `address=${jettonMaster}&` +
      `method=get_wallet_address&` +
      `stack=["tvm.Slice","${userAddress}"]`
    );
    
    const data = await response.json();
    
    if (data.ok && data.result?.stack?.[0]?.[1]?.bytes) {
      return data.result.stack[0][1].bytes;
    }
    return null;
  } catch (error) {
    console.error('Error getting jetton wallet address:', error);
    return null;
  }
}

/**
 * Get jetton balance from wallet
 */
async function getJettonBalance(walletAddress: string, decimals: number = 6): Promise<number> {
  try {
    const response = await fetch(
      `${TON_API_BASE}/runGetMethod?` +
      `address=${walletAddress}&` +
      `method=get_wallet_data`
    );
    
    const data = await response.json();
    
    if (data.ok && data.result?.stack?.[0]?.[1]) {
      const balance = data.result.stack[0][1];
      const balanceInt = typeof balance === 'string' ? parseInt(balance, 16) : parseInt(balance);
      return balanceInt / Math.pow(10, decimals);
    }
    return 0;
  } catch (error) {
    console.error('Error getting jetton balance:', error);
    return 0;
  }
}

/**
 * Fetch USDT balance for an address
 */
export async function getUsdtBalance(address: string): Promise<number> {
  try {
    const walletAddress = await getJettonWalletAddress(TOKEN_ADDRESSES.USDT, address);
    if (!walletAddress) return 0;
    
    return await getJettonBalance(walletAddress, 6); // USDT has 6 decimals
  } catch (error) {
    console.error('Error fetching USDT balance:', error);
    return 0;
  }
}

/**
 * Fetch RIAL balance for an address
 */
export async function getRialBalance(address: string): Promise<number> {
  try {
    // Return 0 until we have the actual RIAL contract address
    if (TOKEN_ADDRESSES.RIAL === 'YOUR_RIAL_CONTRACT_ADDRESS') {
      return 0;
    }
    
    const walletAddress = await getJettonWalletAddress(TOKEN_ADDRESSES.RIAL, address);
    if (!walletAddress) return 0;
    
    return await getJettonBalance(walletAddress, 9); // Assuming RIAL has 9 decimals
  } catch (error) {
    console.error('Error fetching RIAL balance:', error);
    return 0;
  }
}

/**
 * Fetch all balances for a wallet
 */
export async function getAllBalances(address: string): Promise<WalletBalances> {
  try {
    const [tonBalance, usdtBalance, rialBalance] = await Promise.all([
      getTonBalance(address),
      getUsdtBalance(address),
      getRialBalance(address)
    ]);

    return {
      ton: tonBalance,
      usdt: usdtBalance,
      rial: rialBalance
    };
  } catch (error) {
    console.error('Error fetching all balances:', error);
    return {
      ton: 0,
      usdt: 0,
      rial: 0
    };
  }
}

/**
 * Format balance for display
 */
export function formatBalance(balance: number, decimals: number = 4): string {
  if (balance === 0) return '0.00';
  if (balance < 0.0001) return '< 0.0001';
  return balance.toFixed(decimals);
}

/**
 * Calculate USD value (mock implementation)
 */
export function getUsdValue(balance: number, token: 'TON' | 'USDT' | 'RIAL'): number {
  // Mock prices - replace with real price API
  const prices = {
    TON: 2.5,
    USDT: 1.0,
    RIAL: 1.0 // Assuming 1:1 with USD
  };
  
  return balance * prices[token];
}
