import { getBalancesSum, BalanceProvider } from "@ts-crypto-calc/core";
import { Etherscan } from "@ts-crypto-calc/etherscan";
import { Infura } from "@ts-crypto-calc/infura";
import { config } from "./config";
import wallets from "./wallets.json";

const providersMap: { [k: string]: BalanceProvider } = {
  etherscan: new Etherscan(config.ETHERSCAN_API_KEY),
  infura: new Infura(),
};

const balanceProvider = providersMap[config.provider];

getBalancesSum(wallets, balanceProvider).then((sum) => {
  console.log("🚀 ~ file: index.ts ~ line 11 ~ getBalancesSum ~ sum", sum);
});
