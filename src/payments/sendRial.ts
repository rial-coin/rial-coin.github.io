import { toNano, beginCell, Address } from 'ton';
 import {
  RECEIVER_ADDRESS,
  getTxValidUntil,
  RIAL_AMOUNT,
  TON_FEE,
  RIAL_MASTER_ADDRESS,
} from '../utils/transactionConfig';
import { getJettonWalletAddress } from '../utils/getJettonWalletAddress';

export const handleSendRial = async (
  tonConnectUI: any,
  userFriendlyAddress: string | null,
) => {
  if (!userFriendlyAddress) {
    console.error('User address is not available');
    return;
  }

  const forwardPayload = beginCell()
    .storeUint(0, 32) // 0 opcode means we have a comment
    .storeStringTail('RIAL Pass payment!')
    .endCell();

  const rialMessageBody = beginCell()
    .storeUint(0xf8a7ea5, 32) // opcode for jetton transfer
    .storeUint(0, 64) // query id
    .storeCoins(RIAL_AMOUNT)
    .storeAddress(RECEIVER_ADDRESS)
    .storeAddress(Address.parse(userFriendlyAddress)) // response destination
    .storeBit(0) // no custom payload
    .storeCoins(toNano('0.01')) // forward amount - if >0, will send notification message
    .storeBit(1) // we store forwardPayload as a reference
    .storeRef(forwardPayload)
    .endCell();

  let jettonWalletAddress;
  let jettonBalance;
  if (userFriendlyAddress) {
    const result = await getJettonWalletAddress(
      userFriendlyAddress,
      RIAL_MASTER_ADDRESS,
    );
    jettonWalletAddress = result.walletAddress;
    jettonBalance = result.balance;
  }

  if (!jettonBalance || jettonBalance < RIAL_AMOUNT) {
    alert('Insufficient funds');
    return;
  }

  if (!jettonWalletAddress) {
    alert('Jetton Wallet Address is not available');
    return;
  }

  const notTransaction = {
    validUntil: getTxValidUntil(),
    messages: [
      {
        address: jettonWalletAddress.toString(),
        amount: TON_FEE.toString(),
        payload: rialMessageBody.toBoc().toString('base64'),
      },
    ],
  };

  try {
    await tonConnectUI.sendTransaction(notTransaction);
    console.log('NOT payment sent successfully');
  } catch (error) {
    console.error('Error sending NOT transaction:', error);
  }
};
