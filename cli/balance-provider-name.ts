const ALL_BALANCE_PROVIDER_NAMES = ['INFURA', 'ETHERSCAN'] as const;
type BalanceProviderNameTuple = typeof ALL_BALANCE_PROVIDER_NAMES;
export type BalanceProviderName = BalanceProviderNameTuple[number];

export const BalanceProviderName = {
  ofString(value: string): BalanceProviderName {
    const isBalanceProviderName = ALL_BALANCE_PROVIDER_NAMES.includes(value as BalanceProviderName);

    if (!isBalanceProviderName) {
      throw new Error(`Invalid BalanceProviderName ${value}`);
    }

    return value as BalanceProviderName;
  },
};