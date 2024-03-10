import { JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, Contract } from "ethers";
import { ethersProvider } from "~~/common/config";

/**
 * Get ERC20 token balance for a given account
 *
 * @param token Token address to get balance of
 * @param account Account to get balance for
 * @param provider JsonRpcProvider
 * @returns Token balance
 */
export const getTokenBalance = async (
    token: string,
    account: string,
    provider: JsonRpcProvider = ethersProvider
  ): Promise<string> => {
    const iERC20 = [
      'function balanceOf(address account) external view returns (uint256)',
    ];
    const erc20 = new Contract(token, iERC20, provider);
    return erc20.balanceOf(account);
  };
  
  export const getNativeAssetBalance = async (
    account: string,
    provider: JsonRpcProvider
  ): Promise<string> => {
    return BigNumber.from(
      await provider.send('eth_getBalance', [account, 'latest'])
    ).toString();
  };