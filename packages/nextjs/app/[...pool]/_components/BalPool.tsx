import { useEffect, useState } from "react";
import { getBuiltGraphSDK } from "~~/.graphclient";
// import { formatToken } from "~~/app/helpers/formatToken";
import { Address } from "~~/components/scaffold-eth";
import { formatTime } from "~~/utils/formatTime";
import HistoricalGraph from "./HistoricalGraph";
import { formatLarge } from "~~/app/helpers/formatLarge";
import { useAccount } from "wagmi";
import JoinPool from "./JoinPool";

const BalPool = ({ poolId }: { poolId: string }) => {
  const { address } = useAccount();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [poolData, setPoolData] = useState<any>({});
  const [historicData, setHistoricData] = useState<any[]>([]);
  
  const [isCollapsed, setCollapsed] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const sdk = getBuiltGraphSDK();
        const result = await sdk.GetBalPool({ poolId })
        
        if (result && result.bal_pool?.tokens) {
          const filteredTokens = result.bal_pool.tokens.filter(
            (token: any) => token.address !== poolId.substring(0, 42)
          );

          setPoolData({
            ...result.bal_pool,
            tokens: filteredTokens,
          });
        }

        const historicResult = await sdk.GetHistoricalData({ poolId });
        historicResult && historicResult.bal_poolHistoricalLiquidities && setHistoricData(historicResult.bal_poolHistoricalLiquidities);
        
      } catch (error) {
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [poolId]);

  if (loading || !poolData.totalLiquidity || !historicData) {
    return <div className="flex w-full items-center h-[100vh] justify-center"><span className="loading loading-ring loading-lg"></span></div>
  }

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
    <>
      <div className="w-full">
        {poolData &&
          <div className="flex p-2 lg:p-5 flex-col">

            <div className="flex items-center gap-x-2 flex-row">
              <p>{poolData.name}</p>
              <Address address={poolId.substring(0, 42)} />
            </div>


            <div className="flex flex-col mt-2 lg:flex-row">

              {historicData.length > 1 &&
                <div className="flex lg:mt-5 flex-1 w-full flex-col lg:min-w-[59vw] h-[70vh]">
                  <h2 >Liquidity over time</h2>
                  <HistoricalGraph data={historicData} />
                </div>
              }

              <div className="flex w-full lg:max-w-[380px] justify-end card card-body bg-base-100 bg-opacity-60 p-4 flex-col">
                <div className="flex w-full">
                  {poolData.tokens && address &&
                    <JoinPool address={address} data={poolData.tokens} poolId={poolId} />                  
                  }
                </div>


                <h3 className="text-center mb-0 text-lg">Stats</h3>

                <div>
                  <p className="mt-0">Pool balances</p>
                  <div className="flex justify-between">
                    {poolData.tokens && poolData.tokens.map((token: any, index: number) => (
                      <div key={index}>
                        <p>
                          {Number(token.balance).toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            
                          })}
                          {' '}
                          {token.symbol}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Render stat */}
                <div className="stats stats-vertical shadow">
                  {renderStat("Total Liquidity", formatLarge(poolData.totalLiquidity), "Total liquidity")}
                  {renderStat("Total Swap Fee", formatLarge(poolData.totalSwapFee), "Total swap fees")}
                  {renderStat("Total Swap Volume", formatLarge(poolData.totalSwapVolume), "Total swap volume")}
                </div>
              </div>
            </div>

            <div className="mt-4">
                {poolData && poolData.tokens && (
                  <div className="p-5 bg-base-100 rounded-xl">
                    <table className="table-fixed text-sm lg:text-base w-full">
                      <thead>
                        <tr>
                          <th className="text-left p-0 lg:hidden">Token</th>
                          <th className="text-left hidden lg:flex">Token</th>
                          <th className="lg:text-right">Symbol</th>
                          <th className="lg:text-right">Balance</th>
                          <th className="text-right">Weight (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {poolData.tokens.map((token: any, index: number) => (
                          <tr key={index} className="whitespace-nowrap">
                            <td className="py-2 lg:hidden">
                              <div className="">
                                {index + 1}
                              </div>
                            </td>
                            <td className="py-2 lg:flex hidden">
                              <div className="flex">
                                {index + 1}: <Address address={token.address} />
                              </div>
                            </td>
                            <td className="py-2">
                              <div className="lg:text-right">
                                <span className="px-3">{token.symbol}</span>
                              </div>
                            </td>
                            <td className="py-2 lg:text-right">
                              {Number(token.balance).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </td>
                            {Number(token.weight) &&
                              <td className="py-2 text-right">
                                {`${(parseFloat(token.weight) * 100).toFixed(2)}%`}
                              </td>
                            }
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>


            <div className="collapse mt-10">
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
                <div className="collapse-content space-y-8 text-primary-content peer-checked:text-secondary-conten transition-all duration-300 ease-in-outt">
                  <div className="flex gap-1 pt-2 whitespace-nowrap">Factory: <Address address={poolData.factory && poolData.factory.substring(0, 42)} /></div>
                  <p>Pool type: {poolData.poolType}</p>
                  <p>Version: {poolData.poolTypeVersion}</p>
                  <p>Created: {poolData.createTime && formatTime(poolData.createTime)}</p>
                  <p>Holders: {poolData.holdersCount}</p>
                  <p>Paused: {poolData.isPaused}</p>
                  <p className="flex gap-1 whitespace-nowrap">Owner: <Address address={poolData.owner} /></p>
                </div>
              )}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default BalPool;




// Number(poolData.totalSwapFee).toLocaleString(undefined, { //TODO: Use this in the more details section to show the valuses as is.
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 0,
//   })