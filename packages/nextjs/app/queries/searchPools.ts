import { gql } from '@apollo/client';

export const SEARCH_POOLS = gql`
  query SearchPools(
    $balPoolId: ID,
    $uniPoolId: ID,
    $poolAddress: bal_Bytes,
    $tokenSymbol: String
  ) {
    bal_pools(where: { id: $balPoolId, address_contains: $poolAddress }) {
      id
      name
      tokens(where: { symbol_contains: "B" }) {
        symbol
      }
      poolType
      swapFee
      swapsCount
      totalLiquidity
      totalSwapFee
      totalSwapVolume
    }

    uni_pools(where: { id: $uniPoolId, token1_: {symbol_contains: "B"}, token0_: {symbol_contains: "B"}}) {
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
