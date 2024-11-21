import { Address } from 'ton';
import { toNano } from 'ton';

export const getTxValidUntil = () => Math.floor(Date.now() / 1000) + 600;

// addresses
export const RECEIVER_ADDRESS = Address.parse(
  'UQDcvCRqM7EjF61pCXIhbKrRChCRKU_a-v8r9P3A1iwMc8Tz',
);
export const USDT_MASTER_ADDRESS =
  'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';
export const RIAL_MASTER_ADDRESS =
  'EQDVBtJFrXjcxBb_q003GX_v-NOEqbslgu1__9IO3xfJHhSu';

// amount
export const TON_AMOUNT = toNano('0.08');
export const TON_FEE = toNano('0.04');
export const RIAL_AMOUNT = toNano('1');
export const USDT_AMOUNT = 0.06 * 1_000_000;
