import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { getBuiltGraphSDK } from "~~/.graphclient"
import { formatLarge } from "~~/app/helpers/formatLarge";
import { Address } from "~~/components/scaffold-eth";
import { formatTime } from "~~/utils/formatTime";
import UniLiquidity from "./UniLiquidity";
import MintPosition from "./MintPositon";
import { SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core";


const UniPool = ({ poolId }: { poolId: string }) => {
  const [poolData, setPoolData] = useState<any>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 
  const [isCollapsed, setCollapsed] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sdk = getBuiltGraphSDK();
        const result = await sdk.GetUniPool({ poolId })
        
        setPoolData(result.uni_pool); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pool data:', error);
        setError('Error fetching pool data. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchData();
  }, [poolId]);

  
  // Tokens
  const TOKEN0 = poolData?.token0
  ? new Token(
      SUPPORTED_CHAINS[0],
      poolData.token0.id,
      Number(poolData.token0.decimals),
      poolData.token0.symbol,
      poolData.token0.name
    )
  : null;

const TOKEN1 = poolData?.token1
  ? new Token(
      SUPPORTED_CHAINS[0],
      poolData.token1.id,
      Number(poolData.token1.decimals),
      poolData.token1.symbol,
      poolData.token1.name
    )
  : null;
  
  
  
  // console.log(poolData)
  
    const renderStat = (title: string, value: string | number | undefined, description: string): React.ReactNode => {
      return (
        <div className="stat space-y-2">
          <div className="stat-title">{title}</div>
          <div className="stat-value">${value}</div>
          {/* <div className="stat-desc">{description}</div> */}
        </div>
      );
    };

  return (
    <div className="w-full">
      {poolData && (
        <>

          {/*  */}
          <div className="flex py-2 items-center">
            <>
              {poolData.token0.symbol}/{poolData.token1.symbol}
              <span className="badge text-xs mr-3">{Number(poolData.feeTier) * 0.0001}%</span>
            </>
            <div><Address address={poolId} /></div>
          </div>
          {/*  */}

          <div className="flex flex-col w-full lg:flex-row gap-0">
            <div className="flex w-full flex-1 lg:w-[50vw]">
              {TOKEN0 !== null && TOKEN1 !== null &&
                <UniLiquidity token0={TOKEN0} token1={TOKEN1} />              
              }
            </div>
            
            <div className="flex w-full lg:max-w-[380px] card card-body bg-base-100 bg-opacity-60 p-4 flex-col">
              {TOKEN0 !== null && TOKEN1 !== null &&
                <MintPosition token0={TOKEN0} token1={TOKEN1} />
              }
              <h3 className="text-center mb-0 text-lg">Stats</h3>
              <div>
                <p className="mt-0">Pool balances</p>
                <div className="flex justify-between">
                  <div>{formatLarge(poolData.totalValueLockedToken0)} {poolData.token0.symbol}</div>
                  <div>{formatLarge(poolData.totalValueLockedToken1)} {poolData.token1.symbol}</div>
                </div>
              </div>

              <div className="flex flex-col py-4 leading-10 items-center">
                <div>
                  <span>1 {poolData.token1.symbol} will exchange for </span>
                  <span> ~{Number(poolData.token0Price).toFixed(4)} {poolData.token0.symbol}</span>
                </div>
                <div>
                  <span>1 {poolData.token0.symbol} will exchange for</span>
                  <span> ~{Number(poolData.token1Price).toFixed(4)} {poolData.token1.symbol}</span>
                </div>
              </div>

              {/* Render stat */}
              <div className="stats stats-vertical shadow">
                {renderStat("TVL", formatLarge(Number(poolData.totalValueLockedUSD)), "Total value locked")}            
                {renderStat("Total Fee", formatLarge(Number(poolData.feesUSD)), "Total fees")}            
                {renderStat("Total Volume", formatLarge(Number(poolData.volumeUSD)), "Total volume")}           
              </div>

            </div>
          </div>


         
          

          
          <div className="collapse">
              <input
                type="checkbox"
                className="peer"
                checked={isCollapsed}
                onChange={() => setCollapsed(!isCollapsed)}
              />
              <div className="collapse-title flex gap-x-2 items-center transition-all duration-1000 ease-in-out text-primary-content peer-checked:text-secondary-content">
                {isCollapsed ? 'Hide Details' : 'Show More Details'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${
                      isCollapsed ? '' : 'transform rotate-180'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>

              </div>
              {isCollapsed && (
                <div className="collapse-content text-primary-content space-y-8 peer-checked:text-secondary-content transition-all duration-300 ease-in-out">
                  <p>Transactions: {poolData.txCount}</p>
                  <span className="flex gap-x-2 items-center whitespace-nowrap">{poolData.token0.name} contract: <Address address={poolData.token0.id} /></span>
                  <div>{poolData.token0.name} decimal: {poolData.token0.decimals}</div>
                  <p>{poolData.token0.name} Fees: ${formatLarge(poolData.token0.feesUSD)}</p>
                  <p>{poolData.token0.name} Volume: ${formatLarge(poolData.volumeToken0)}</p>
                  <span className="flex gap-x-2 items-center whitespace-nowrap">{poolData.token1.name} contract: <Address address={poolData.token1.id} /></span>
                  <div>{poolData.token1.name} decimal: {poolData.token1.decimals}</div>
                  <p>{poolData.token1.name} Fees: ${formatLarge(poolData.token1.feesUSD)}</p>
                  <p>{poolData.token1.name} Volume: ${formatLarge(poolData.volumeToken1)}</p>
                  <p>TVL ETH: Ξ {poolData.totalValueLockedETH.toLocaleString()}</p>
                  <p>Liquidity: Ξ {Number(formatEther(poolData.liquidity)).toFixed(3)}</p>
                  <p>Created: {poolData.createdAtTimestamp && formatTime(poolData.createdAtTimestamp)}</p>
                </div>
              )}
            </div>
        </>
      )}
    </div>
  );
}

export default UniPool;