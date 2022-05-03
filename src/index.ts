import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BBhN2thD82giqjvvt7uu2Qhz4EerCc4RguFieFyt8oee'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '4YW3DTHV923to7zUj3cW63bLtJbbxVjMhwQUYXQC2z4Q'
);
