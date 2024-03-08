import { gql } from '@apollo/client';

export const GET_UNI_POOL = gql`
  query GetUniPool($poolId: ID!) {
    uni_pool(id: $poolId) {
        feeTier
        feesUSD
        txCount
        liquidity
        token0Price
        token1Price
        volumeToken0
        volumeToken1
        token0 {
            decimals
            derivedETH
            feesUSD
            id
            name
            symbol
            totalValueLockedUSD
            txCount
            volumeUSD
            volume
          }
          token1 {
            decimals
            derivedETH
            feesUSD
            id
            name
            symbol
            totalValueLocked
            totalValueLockedUSD
            txCount
            volume
            volumeUSD
          }
        volumeUSD
        createdAtTimestamp
        totalValueLockedUSD
        totalValueLockedETH
        totalValueLockedToken0
        totalValueLockedToken1
    }
}
`;
