import { XfrPublicKey } from '../services/ledger/types';
export declare const getFraAssetCode: () => Promise<string>;
export declare const getMinimalFee: () => Promise<BigInt>;
export declare const getBarToAbarMinimalFee: () => Promise<BigInt>;
export declare const getFraPublicKey: () => Promise<XfrPublicKey>;
