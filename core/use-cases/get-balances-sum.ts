import { BalanceProvider, Wallet } from "../domain/wallet";

export const getBalancesSum = async (
  addresses: string[],
  balanceProvider: BalanceProvider
) => {
  const balancePromises = addresses.map((address) =>
    new Wallet(address).getEtherBalance(balanceProvider)
  );

  const balances = await Promise.all(balancePromises);

  return balances.reduce((accum, balance) => {
    return accum + balance;
  }, 0);
};
