export type EtherScanApiResponse = {
  status: string;
  message: string;
  result: string;
};

export class Etherscan {
  constructor(private readonly API_KEY: string) {}

  async getEtherFromAPI(address: string): Promise<EtherScanApiResponse> {
    const apiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${this.API_KEY}`;
    const apiResp = await fetch(apiUrl);
    return apiResp.json();
  }

  async getEtherBalance(address: string): Promise<number> {
    const apiResp = await this.getEtherFromAPI(address);
    return Number(apiResp.result) / 10 ** 18;
  }
}
