export type BalanceProvider = {
  getEtherBalance: (address: string) => Promise<number>;
};
