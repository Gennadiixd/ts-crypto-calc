import { getBalancesSum, BalanceProvider } from "../core";
import { Etherscan } from "../packages/etherscan";
import { Infura } from "../packages/infura";
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
