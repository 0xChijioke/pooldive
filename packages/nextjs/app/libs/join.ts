import { AddressZero } from '@ethersproject/constants';
import {
    approveToken
} from "../helpers/approveToken";
import { balancer, getProvider, sendTransaction } from '~~/common/config';
import { getTokenBalance } from '../helpers/getBalance';
import { BigNumber, ethers } from 'ethers';

export async function join({ poolId, tokenData, address }: { poolId: string, tokenData: any, address: string }) {
    
    const provider = getProvider()
    if (!address || !provider) {
        return 
    }


    const { poolsOnChain, pools } = balancer.data;
    
    let pool = await pools.find(
        poolId
    );
    if (!pool) throw Error('Pool not found');

    // Tokens that will be provided to the pool by the joiner
    const tokensIn = tokenData.data.map((t: { address: string, symbol: string }) => t.symbol.toLowerCase() === 'weth' ? AddressZero : t.address);



    // FIXME: this is hard-coded for the purpose of testing and demostration
    const amountsIn: string[] = await Promise.all(
    tokenData.data.map(async (t: { address: string, symbol: string }) => {
        const balance = await getTokenBalance(t.address, address);
        // Adjust the calculation based on your needs
        const desiredAmount = BigNumber.from('1');
        const amount = BigNumber.from(balance).gte(desiredAmount) ? desiredAmount : balance;
        return amount.toString();
    })
    );
    

        
    // Loop through tokens for approval (excluding ETH/WETH)
    for (let i = 0; i < tokenData.length; i++) {
        if (tokenData[i].symbol.toLowerCase() !== 'weth') {
            await approveToken(
                tokenData[i].address,
                balancer.contracts.vault.address,
                amountsIn[i],
                address,
                provider as ethers.providers.Web3Provider,
            );
        }
    }

    // Refresh pool data from chain before building and sending tx
    pool = await poolsOnChain.refresh(pool);

    // Build join transaction
    const slippage = '100'; // 100 bps = 1%
    const { to, data, minBPTOut } = balancer.pools.buildJoin({
        pool,
        userAddress: address,
        tokensIn,
        amountsIn,
        slippage,
    });

    // Calculate price impact
    const priceImpact = balancer.pools.calcPriceImpact({
        pool,
        tokenAmounts: amountsIn,
        bptAmount: minBPTOut,
        isJoin: true,
    });

    // Submit join tx
    const transactionResponse = await sendTransaction({
        to,
        data,
        value: 0,
        from: address
    });

    
    
    //   console.log('Balances before exit:        ', btcBefore);
    //   console.log('Balances after exit:         ', btcAfter);
    console.log('Min BPT expected after exit: ', [minBPTOut.toString()]);
    console.log('Price impact:                ', priceImpact.toString());
    return transactionResponse;
}
