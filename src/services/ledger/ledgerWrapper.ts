// import nodeLedger, { LedgerForNode } from './nodeLedger';
// import webLedger, { LedgerForWeb } from './webLedger';
import nodeLedger from './nodeLedger';
import { LedgerForNode as LedgerForNodeL } from './nodeLedger';
import webLedger from './webLedger';
import { LedgerForWeb as LedgerForWebL } from './webLedger';

export * as webLedger from './webLedger';
export * as nodeLedger from './nodeLedger';

export type LedgerForWeb = LedgerForWebL;
export type LedgerForNode = LedgerForNodeL;

export type Ledger = LedgerForNode | LedgerForWeb;

export const isItNodeEnv = () => typeof process !== 'undefined' && process.release.name === 'node';

export const getWebLedger = async (): Promise<Ledger> => {
  const myLedger = await webLedger();

  return myLedger;
};

export const getNodeLedger = async (): Promise<Ledger> => {
  const myLedger = await nodeLedger();

  return myLedger;
};

export const getLedger = async (): Promise<Ledger> => {
  const isNodeEnv = isItNodeEnv();

  if (isNodeEnv) {
    return getNodeLedger();
  }

  return getWebLedger();
};
