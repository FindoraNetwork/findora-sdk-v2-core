export {};

declare global {
  namespace NodeJS {
    interface Global {
      window: any;
    }
  }
}

declare module 'crypto' {
  namespace webcrypto {
    const subtle: any;
  }
}
