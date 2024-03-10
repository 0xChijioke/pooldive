import React, { useState } from "react";
import { ReactEventHandler } from "react";
import { Address } from "~~/components/scaffold-eth";
import { TGetPoolQuery } from "~~/types/types";
import { formatCurrency } from "~~/utils/formatCurrency";

type UniSwapPoolTableProps = {
  pools: any[];
  onRowClick: ReactEventHandler<HTMLTableRowElement>;
  updateFilterOptions: (newOptions: Partial<TGetPoolQuery>) => void;
};

const UniSwapPoolTable: React.FC<UniSwapPoolTableProps> = ({ pools, onRowClick, updateFilterOptions }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSortOrder(newSortOrder);

    updateFilterOptions({ uniOrderDirection: newSortOrder });
  };
  return (
    <div className="overflow-x-auto border border-base-100 rounded-xl">
          <table className="table table-zebra text-base">
            {/* head */}
            <thead>
              <tr className="text-base bg-base-100 mt-2">
            <th>#</th>
            <th>Pool</th>
            <th
              className="items-center flex justify-center cursor-pointer"
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
              TVL
            </th>
            <th>Transactions</th>
            {/* <th>Liquidity</th> */}
            <th>Fees</th>
            <th>Volume</th>
            <th>Pool contract</th>
          </tr>
        </thead>
        <tbody>
          {pools.length > 1 &&
            pools.map((pool: any, index: number) => (
                <tr
                key={pool.id}
                className={`cursor-pointer hover`}
                data-index={pool.id}
                onClick={onRowClick}
                >
                    <td className=" text-slate-500">{index + 1}</td>
                    <td>
                        {pool.token0 && pool.token0.symbol}/{pool.token1 && pool.token1.symbol}
                        <span className="badge text-xs">{Number(pool.feeTier)*0.0001}%</span>
                    </td>
                    <td>{pool.totalValueLockedUSD && formatCurrency(pool.totalValueLockedUSD)}</td>
                    <td>{pool.txCount}</td>
                    {/* <td>{formatCurrency(pool.liquidity)}</td> */}
                    <td>{formatCurrency(pool.feesUSD)}</td>
                    <td>{formatCurrency(pool.volumeUSD)}</td>
                    <td><Address address={pool.id.substring(0, 42)} /></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UniSwapPoolTable;
