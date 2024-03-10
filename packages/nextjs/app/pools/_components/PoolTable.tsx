import { useRouter } from "next/navigation";
import { Dispatch, ReactEventHandler, SetStateAction, useEffect } from "react";
import BalancerPoolTable from "./poolTables/BalPoolTable";
import UniSwapPoolTable from "./poolTables/UniPoolTable";
import { TGetPoolQuery } from "~~/types/types";




const PoolsTable = ({ pools, selectedPool, setFilterOptions }: { pools: any, selectedPool: string, setFilterOptions: Dispatch<SetStateAction<TGetPoolQuery>>}) => {
  const router = useRouter();

  
  useEffect(() => {
    pools.bal.forEach((pool: any) => {
      router.prefetch(`/bal/${pool.id}`);
    });

    pools.uni.forEach((pool: any) => {
      router.prefetch(`/uni/${pool.id}`);
    });
  }, [pools]);

  const handleRowClick: ReactEventHandler<HTMLTableRowElement> = (e) => {
    const poolId = e.currentTarget?.getAttribute("data-index");
    poolId &&
      router.push(`/${selectedPool}/${poolId}`);
  };



  const updateFilterOptions = (newOptions: Partial<TGetPoolQuery>) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      ...newOptions,
    }));
  };



  return (
    <div className="overflow-x-auto border scroll-smooth border-base-100 rounded-xl">
      {selectedPool === 'bal' && (
        <BalancerPoolTable pools={pools.bal} onRowClick={handleRowClick} updateFilterOptions={updateFilterOptions} />
      )}
      {selectedPool === 'uni' && (
        <UniSwapPoolTable pools={pools.uni} onRowClick={handleRowClick} updateFilterOptions={updateFilterOptions} />
      )}
    </div>
  );
};
    
  export default PoolsTable;