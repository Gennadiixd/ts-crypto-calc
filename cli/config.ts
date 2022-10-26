import dotenv from "dotenv";
import { Env } from "@ts-crypto-calc/env";

dotenv.config();

export type Config = {
  ETHERSCAN_API_KEY: string;
  provider: string;
};

const getEnvOrThrowLogs = Env.getEnvOrThrow(console.error);

export const config: Config = {
  ETHERSCAN_API_KEY: getEnvOrThrowLogs("ETHERSCAN_API_KEY"),
  provider: process.argv[2],
};
