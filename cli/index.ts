import { BalanceProvider } from "../core/domain/wallet";
import { getBalancesSum } from "../core/use-cases/get-balances-sum";
import { EtherscanProvider } from "../packages/etherscan/etherscan";
import { config } from "./config";
import wallets from "./wallets.json";

const balanceProvider: BalanceProvider = new EtherscanProvider(
  config.ETHERSCAN_API_KEY
);

getBalancesSum(wallets, balanceProvider).then((sum) => {
  console.log("🚀 ~ file: index.ts ~ line 11 ~ getBalancesSum ~ sum", sum);
});
