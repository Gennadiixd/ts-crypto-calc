import { getBalancesSum } from "@ts-crypto-calc/core";
import { Etherscan } from "@ts-crypto-calc/etherscan";
import { Infura } from "@ts-crypto-calc/infura";
import { config, Config } from "./config";
import wallets from "./wallets.json";

const providersMap = {
  ETHERSCAN: Etherscan,
  INFURA: Infura,
};

const providerApiKey: `${Config["provider"]}_API_KEY` = `${config.provider}_API_KEY`;
const BalanceProvider = providersMap[config.provider];
const balanceProvider = new BalanceProvider(providerApiKey);

getBalancesSum(wallets, balanceProvider).then((sum) => {
  console.log("🚀 ~ file: index.ts ~ line 11 ~ getBalancesSum ~ sum", sum);
});
