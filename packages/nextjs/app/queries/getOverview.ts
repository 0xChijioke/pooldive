import { gql } from '@apollo/client';

export const GET_OVERVIEW = gql`
  query GetData {
    bal_balancer(id: "2") {
      id
      poolCount
      totalLiquidity
      totalProtocolFee
      totalSwapCount
      totalSwapFee
      totalSwapVolume
    }
    uni_factory(id: "0x1F98431c8aD98523631AE4a59f267346ea31F984") {
      poolCount
      totalFeesUSD
      totalValueLockedUSD
      totalVolumeUSD
    }
  }
`;