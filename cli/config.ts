import { BalanceProviderName } from "@ts-crypto-calc/core";
import { Env } from "@ts-crypto-calc/env";
import dotenv from "dotenv";

dotenv.config();

export type Config = {
  ETHERSCAN_API_KEY: string;
  INFURA_API_KEY: string;
  provider: "INFURA" | "ETHERSCAN";
};

const getEnvOrThrowLogs = Env.getEnvOrThrow(console.error);

export const config: Config = {
  ETHERSCAN_API_KEY: getEnvOrThrowLogs("ETHERSCAN_API_KEY"),
  INFURA_API_KEY: getEnvOrThrowLogs("INFURA_API_KEY"),
  provider: BalanceProviderName.ofString(process.argv[2]),
};
