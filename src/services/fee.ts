import { getLedger } from '../services/ledger/ledgerWrapper';
import { XfrPublicKey } from '../services/ledger/types';

export const getFraAssetCode = async (): Promise<string> => {
  const ledger = await getLedger();
  const assetCode = ledger.fra_get_asset_code();
  return assetCode;
};

export const getMinimalFee = async (): Promise<BigInt> => {
  const ledger = await getLedger();
  const fee = ledger.fra_get_minimal_fee();
  return fee;
};

export const getBarToAbarMinimalFee = async (): Promise<BigInt> => {
  const ledger = await getLedger();
  const fee = ledger.fra_get_minimal_fee_for_bar_to_abar();
  return fee;
};

export const getFraPublicKey = async (): Promise<XfrPublicKey> => {
  const ledger = await getLedger();
  const key = ledger.fra_get_dest_pubkey();
  return key;
};
