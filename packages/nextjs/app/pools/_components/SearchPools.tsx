import React, { useState, useEffect } from 'react';
import { getBuiltGraphSDK } from '~~/.graphclient';

const SearchPools = ({ selectedPool, searchResults, setSearchResults }: { selectedPool: "bal" | "uni", searchResults: any, setSearchResults: any }) => {
  const [searchOptions, setSearchOptions] = useState({
    balPoolId: '',
    uniPoolId: '',
    poolAddress: '',
  });
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(''); // 0xCBCdF9626bC03E24f779434178A73a0B4bad62eD
  const [error, setError] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 800); // Adjust the debounce timeout as needed

    return () => clearTimeout(debounceTimer);
  }, [searchInput]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const sdk = getBuiltGraphSDK();
      let result;

      if (searchInput.startsWith('0x')) {
        // Treat as ID or address search
        result = await sdk.SearchPools({
          balPoolId: selectedPool === 'bal' ? searchInput : '',
          uniPoolId: selectedPool === 'uni' ? searchInput : '',
          poolAddress: selectedPool === 'bal' ? searchInput : '',
        });
        // console.log(result)
      } else {
        // Treat as token symbol search
        // console.log(searchInput.toUpperCase())
        result = searchInput.length > 2 && await sdk.SearchPools({
          balPoolId: '',
          uniPoolId: '',
          poolAddress: '',
          tokenSymbol: searchInput.toUpperCase(),
        });
      }

      // console.log(result);
      setSearchResults(result);
    } catch (error) {
      setError('Error searching pools');
      console.error('Error searching pools:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <form className="flex flex-col items-center justify-end space-x-3">
      <input
        className="border-primary bg-base-100 text-base-content p-3 mr-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
        type="text"
        value={searchInput}
        placeholder="Search by id, address, or token symbol"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* {loading && <span>Loading...</span>}
      {error && <span className="text-red-500">{error}</span>} */}
    </form>
  );
};

export default SearchPools;
