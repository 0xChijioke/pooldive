import { useEffect, useState } from "react";
import { getBuiltGraphSDK } from '~~/.graphclient';
import 'animate.css';


const Overview: React.FC = () => {
  const [balancerData, setBalancerData] = useState<any>(null);
  const [uniswapData, setUniswapData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sdk = getBuiltGraphSDK();
        const result = await sdk.GetData();


        setBalancerData(result.bal_balancer);
        setUniswapData(result.uni_factory);
      } catch (error) {
        setError("Error loading data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!balancerData || !uniswapData) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-center animate__backInRight">
        <h2 className="text-lg">Balancer v2</h2>
          {/* <h2 className="text-xs">Ethereum mainnet</h2> */}
        {/* Balancer Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          {renderStat("Total Liquidity", formatNumberAbbreviated(balancerData.totalLiquidity), "Balancer Total Liquidity")}
          {renderStat("Swap Volume", formatNumberAbbreviated(balancerData.totalSwapVolume), "Total swap volume")}
          {renderStat("Swap Fees", formatNumberAbbreviated(balancerData.totalSwapFee), "Total swap fees")}
          {renderStat("Balancer Pools", balancerData.poolCount, "Total pools")}
        </div>
      </div>

          
      <div className="text-center animate__backInLeft">
        <h2 className="text-lg">Uniswap v3</h2>
          {/* Uniswap Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          {renderStat("TVL", formatNumberAbbreviated(uniswapData.totalValueLockedUSD), "Total liquidity")}
          {renderStat("Total Volume", formatNumberAbbreviated(uniswapData.totalVolumeUSD), "Total volume")}
          {renderStat("Total Fees", formatNumberAbbreviated(uniswapData.totalFeesUSD), "Total swap fees")}
          {renderStat("Uniswap Pools", uniswapData.poolCount, "Total pools")}
        </div>
      </div>
    </div>
  );
};



function renderStat(title: string, value: string | number | undefined, description: string): React.ReactNode {
    return (
      <div className="stat space-y-2">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-desc">{description}</div>
      </div>
    );
  }

  
function formatNumber(value?: string | number): string {
    return value ? Number(value).toLocaleString() : "";
}


function formatNumberAbbreviated(value?: string | number): string {
    if (!value) {
      return "";
    }
  
    const numericValue = Number(value);
  
    if (Math.abs(numericValue) >= 1e9) {
      return (numericValue / 1e9).toFixed(2) + "B";
    } else if (Math.abs(numericValue) >= 1e6) {
      return (numericValue / 1e6).toFixed(2) + "M";
    } else if (Math.abs(numericValue) >= 1e3) {
      return (numericValue / 1e3).toFixed(2) + "K";
    } else {
      return numericValue.toFixed(2);
    }
  }

export default Overview;