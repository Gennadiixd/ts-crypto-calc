export type BalanceProvider = {
  getEtherBalance: (address: string) => Promise<number>;
};

export class Wallet {
  constructor(public readonly address: string) {}

  async getEtherBalance(balanceProvider: BalanceProvider) {
    return await balanceProvider.getEtherBalance(this.address);
  }
}
