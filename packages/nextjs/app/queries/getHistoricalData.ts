import { gql } from '@apollo/client';


export const GET_HISTORIC = gql`
query GetHistoricalData($poolId: String!) {
  bal_poolHistoricalLiquidities(where: { poolId: $poolId }) {
      poolLiquidity
      block
      poolTotalShares
    }
  }
  `;
  