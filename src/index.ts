import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BH5Utz3JsRLUhc6RLXfGZUbbDsNShyChe4XPfKajkse9'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '2umcQzLEJGfcDqEwBw6q8q85PpNFwbvN52A4i3bkWNBQ'
);
