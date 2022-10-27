import { getBalancesSum } from "@ts-crypto-calc/core";
import { Etherscan } from "@ts-crypto-calc/etherscan";
import { Infura } from "@ts-crypto-calc/infura";
import { BalanceProviderName } from "./balance-provider-name";
import { config } from "./config";
import wallets from "./wallets.json";

const providersMap = {
  ETHERSCAN: Etherscan,
  INFURA: Infura,
};

const providerApiKeyName: `${BalanceProviderName}_API_KEY` = `${config.provider}_API_KEY`;
const apiKey = config[providerApiKeyName];

const BalanceProvider = providersMap[config.provider];
const balanceProvider = new BalanceProvider(apiKey);

getBalancesSum(wallets, balanceProvider).then((sum) => {
  console.log("🚀 ~ file: index.ts ~ line 11 ~ getBalancesSum ~ sum", sum);
});
