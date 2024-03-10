'use client'

import React, { useEffect, useState } from 'react'
import { getBuiltGraphSDK } from '~~/.graphclient';
import PoolsTable from './PoolTable';
import { TGetPoolQuery } from '~~/types/types';
import SearchPools from './SearchPools';


// TODO: use stateContext.tsx to manage state.
const Pools = () => {
  const [poolLists, setPoolLists] = useState<{ [key in 'bal' | 'uni']: any }>({
    bal: [],
    uni: [],
  });
  const [filterOptions, setFilterOptions] = useState<TGetPoolQuery>({
    first: 10,
    skip: 0,
    balOrderBy: 'totalLiquidity',
    balOrderDirection: 'desc',
    uniOrderBy: 'totalValueLockedUSD',
    uniOrderDirection: 'desc',
  });
  const [hasMore, setHasMore] = useState<{ [key in 'bal' | 'uni']: boolean }>({
    bal: true,
    uni: true,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>('');
  const [selectedPool, setSelectedPool] = useState<'bal' | 'uni'>('bal');
  const [prevOrderDirection, setPrevOrderDirection] = useState<'asc' | 'desc'>('desc');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // If searchResults is not empty, update the poolLists with searchResults
    if (searchResults.length > 0) {
      setPoolLists((prevLists) => ({
        ...prevLists,
        [selectedPool]: searchResults,
      }));
    }
      try {
        setLoading(true);
        const sdk = getBuiltGraphSDK();
        const result = await sdk. GetPools(filterOptions);


        const selectedPoolOrderDirection = filterOptions[`${selectedPool}OrderDirection`];

        if (selectedPoolOrderDirection !== prevOrderDirection) {
          setPoolLists((prevLists) => ({ ...prevLists, [selectedPool]: [] }));
          setPrevOrderDirection(selectedPoolOrderDirection);
        }
       
        if (!poolLists[selectedPool].length && !poolLists[selectedPool === 'bal' ? 'uni' : 'bal'].length) {
          const otherPoolData = result[selectedPool === 'bal' ? 'uni_pools' : 'bal_pools'];
          setPoolLists((prevLists) => ({
            ...prevLists,
            [selectedPool === 'bal' ? 'uni' : 'bal']: otherPoolData.slice(0, filterOptions.first),
          }));
        }
        
        
        setPoolLists((prevLists) => {
          const existingPools = prevLists[selectedPool];
          const newPools = (result as any)[`${selectedPool}_pools`];
    
          const filteredNewPools = newPools.filter((newPool: { id: any; }) => {
            return !existingPools.some((existingPool: { id: any; }) => existingPool.id === newPool.id);
          });
    
          return {
            ...prevLists,
            [selectedPool]: [...existingPools, ...filteredNewPools],
          };
        });

        
        setHasMore((prevHasMore) => ({
          bal: (result as any)['bal_pools'].length === filterOptions.first,
          uni: (result as any)['uni_pools'].length === filterOptions.first,
        }));
      } catch (error) {
        setErrors('Error loading data');
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filterOptions]);

  
  const handleTogglePool = (pool: 'bal' | 'uni') => {
    setSelectedPool(pool);
    setFilterOptions({ ...filterOptions, skip: 0 });
  };

  

  const loadMore = () => {
    if (!loading && hasMore[selectedPool]) {
      setFilterOptions((prevOptions) => ({ ...prevOptions, skip: prevOptions.skip + prevOptions.first }));
    }
  };
  

  return (
    <div className='p-3 space-y-3'>
      {errors && <div className='text-error text-center'>{errors}</div>}

      <div className="flex gap-x-2 items-center justify-end">
        <div className="flex">
          <SearchPools selectedPool={selectedPool} searchResults={searchResults} setSearchResults={setSearchResults} />
        </div>
        <select
          className='select rounded-lg select-md'
          value={selectedPool}
          onChange={(e) => handleTogglePool(e.target.value as 'bal' | 'uni')}
          >
            <option value="bal">Balancer</option>
            <option value="uni">UniSwap</option>
        </select>
      </div>


      {/* {loading && <span className="flex justify-center m-auto loading loading-ring loading-lg"></span>} */}
      {poolLists[selectedPool] && poolLists[selectedPool].length > 0 &&  (
        <>
          <PoolsTable pools={poolLists} selectedPool={selectedPool} setFilterOptions={setFilterOptions} />

          {/* Load more button */}
          <div className='flex items-center justify-center'>
            <button className="flex items-center mt-4" onClick={loadMore} disabled={loading}>
              {loading ? <span className="loading loading-ball loading-lg"></span> : 'Load More'}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Pools;