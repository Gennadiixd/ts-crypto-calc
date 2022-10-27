type WalletBalanceProvider = {
  getEtherBalance: (address: string) => Promise<number>;
};

export class Wallet {
  constructor(public readonly address: string) {}

  async getEtherBalance(balanceProvider: WalletBalanceProvider) {
    return await balanceProvider.getEtherBalance(this.address);
  }
}
