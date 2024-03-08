import { gql } from '@apollo/client';

export const GET_POOLS = gql`
  query GetPools(
    $first: Int = 10, 
    $skip: Int, 
    $balOrderBy: bal_Pool_orderBy, 
    $balOrderDirection: bal_OrderDirection,
    $uniOrderBy: uni_Pool_orderBy,
    $uniOrderDirection: uni_OrderDirection,
    $balPoolId: ID,
    $uniPoolId: ID,
    $poolAddress: bal_Bytes
  ) {
   bal_pools(first: $first, 
    skip: $skip, 
    orderBy: $balOrderBy, 
    orderDirection: $balOrderDirection, 
    where: {
      or: [
          { id: $balPoolId },
          { address: $poolAddress }
        ],
      totalLiquidity_gt: "100",
      totalSwapVolume_gt: "100"
    } ) {
      id
      name
      tokens {
        symbol
      }
      poolType
      swapFee
      swapsCount
      totalLiquidity
      totalSwapFee
      totalSwapVolume
    }

    uni_pools(
      first: $first, 
      skip: $skip, 
      orderBy: $uniOrderBy, 
      orderDirection: $uniOrderDirection, 
      where: {
        or: [
          { id: $uniPoolId }
        ],
        totalValueLockedUSD_gt: "100",
        volumeUSD_gt: "100"
      }
    ) {
      id
      feeTier
      txCount
      liquidity
      token1 {
        symbol
      }
      token0 {
        symbol
      }
      feesUSD
      volumeUSD
      totalValueLockedUSD
    }
  }
`;
