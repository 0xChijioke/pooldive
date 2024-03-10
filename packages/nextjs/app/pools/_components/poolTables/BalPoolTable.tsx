import React, { useEffect, useState } from "react";
import { ReactEventHandler } from "react";
import { formatLarge } from "~~/app/helpers/formatLarge";
import { Address } from "~~/components/scaffold-eth";
import { TGetPoolQuery } from "~~/types/types";


type TokenImageProps = {
  tokenListMapping: Record<string, Token>;
  tokens: any[];
  pool: string;
};

const TokenImage: React.FC<TokenImageProps> = ({ tokenListMapping, tokens, pool }) => {
  const images = tokens
  .filter((token: any) => token.address !== pool)
    .map((token: any, tokenIndex: number) => (
      <img // TODO: use Image component
        key={tokenIndex}
        src={tokenListMapping[token.address.toLowerCase()]?.logoURI}
        // alt={token.symbol}
        className="rounded-full inline-block w-8 h-8 border-2 border-white"
      />
    ));

  return <div className="relative ml-0 mr-4 h-8">{images}</div>;
};




type BalancerPoolTableProps = {
  pools: any[];
  onRowClick: ReactEventHandler<HTMLTableRowElement>;
  updateFilterOptions: (newOptions: Partial<TGetPoolQuery>) => void;
};



type Token = {
  address: string;
  symbol: string;
  logoURI: string;
};




const BalancerPoolTable: React.FC<BalancerPoolTableProps> = ({ pools, onRowClick, updateFilterOptions }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [tokenListMapping, setTokenListMapping] = useState<Record<string, Token>>({});


  useEffect(() => {
    fetch("/tokenList.json")
      .then(response => response.json())
      .then(tokenList => {
        const filteredTokens = tokenList.tokens.filter((token: { chainId: number; }) => token.chainId === 1);
  
        const mapping: Record<string, Token> = {};
        filteredTokens.forEach((token: Token) => {
          mapping[token.address.toLowerCase()] = token;
        });
  
        setTokenListMapping(mapping);
      });
  }, []);


  const handleSortToggle = () => {
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSortOrder(newSortOrder);

    updateFilterOptions({ balOrderDirection: newSortOrder });
  };

    return (
        <div className="overflow-x-auto border border-base-100 relative rounded-xl">
          <table className="table table-zebra text-base">
            {/* head */}
            <thead className="sticky top-0 bg-base-100">
              <tr className="text-base font-light bg-base-100 mt-2">
                <th>#</th>
                <th>Pool Composition</th>
                <th className="items-center flex justify-center cursor-pointer"
                  onClick={handleSortToggle}
                >
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-6 inline-block ${
                      sortOrder === 'asc' ? 'transform rotate-180' : ''
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                  
                  {' '}Liquidity
                </th>
                <th>Type</th>
                <th>Swaps</th>
                <th>Total Fee</th>
                <th>Total Volume</th>
                <th>Pool contract</th>
              </tr>
            </thead>
            <tbody>
              {pools.length && pools.map((pool: any, index: number) => (
                  <tr key={pool.id} className={`cursor-pointer hover hover:bg-base-100`} data-index={pool.id} onClick={(e) => onRowClick(e)}>
                  <td className=" text-slate-500 pr-0">{index + 1}</td>
                  <td className="whitespace-nowrap pl-0 flex flex-row">
                    <TokenImage tokenListMapping={tokenListMapping} tokens={pool.tokens} pool={pool.id.substring(0, 42)} />
                    {pool.tokens &&
                      pool.tokens
                      .filter((token: any) => token.address !== pool.id.substring(0, 42)) // Exclude the token with the same address as the pool
                      .map((token: any, tokenIndex: number, tokensArray: any[]) => (
                        <React.Fragment key={tokenIndex}>
                          <span className="text-xs lg:text-base items-center flex">{token.symbol}</span>
                          {tokenIndex < tokensArray.length - 1 ? '/' : ''}
                        </React.Fragment>
                      ))}
                    <span className="badge text-xs">
                      {Number(pool.swapFee) * 100 < 0.0001 ? 
                        (Number(pool.swapFee) * 100).toFixed(5) + '%' : 
                        (Number(pool.swapFee) * 100) + '%'}
                    </span>

                  </td>
                  <td>${formatLarge(pool.totalLiquidity)}</td>
                  <td>{pool.poolType}</td>
                  <td>{pool.swapsCount}</td>
                  <td>${formatLarge(pool.totalSwapFee)}</td>
                  <td>${formatLarge(pool.totalSwapVolume)}</td>
                  <td><Address address={pool.id.substring(0, 42)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  };
      
    export default BalancerPoolTable;
