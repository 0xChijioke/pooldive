import { gql } from '@apollo/client';

export const GET_BAL_POOL = gql`
  query GetBalPool($poolId: ID!) {
    bal_pool(id: $poolId) {
      createTime
      factory
      holdersCount
      isPaused
      lastPostJoinExitInvariant
      name
      owner
      poolType
      poolTypeVersion
      totalLiquidity
      totalProtocolFee
      totalSwapFee
      totalSwapVolume
      tx
      tokens {
        address
        balance
        decimals
        name
        symbol
        weight
        id
      }
    }
  }
`;
