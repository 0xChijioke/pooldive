import { BigNumber } from 'ethers';
import { useState, useEffect } from 'react';
import { getTokenBalance } from '~~/app/helpers/getBalance';
import { join } from '~~/app/libs/join';

const JoinPool = ({ address, data, poolId }: { address: string, data: any, poolId: string }) => {
    const [balances, setBalances] = useState<{ balance: number; symbol: string }[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const balancePromises = data.map(async (t: any) => {
          const balance = await getTokenBalance(t.address, address);
          const adjustedBalance = BigNumber.from(balance).div(BigNumber.from(10).pow(t.decimals)).toString();
          return { balance: adjustedBalance, symbol: t.symbol };
          });

        const balances = await Promise.all(balancePromises);
        setBalances(balances);
      } catch (error) {
        console.error('Error fetching token balances:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
  }, [address, data]);

  const handleAddLiquidity = async () => {
    try {
      await join({poolId, tokenData: { data }, address})
      
      console.log('Liquidity added successfully!');
    } catch (error) {
      console.error('Error adding liquidity:', error);
    }
  };

  return (
    <div className='flex w-full flex-col'>
      <h3 className='text-center text-base'>Your token balances</h3>
      <div className='flex-row flex py-3 justify-between'>
        {loading ? (
          <p className='text-center'>Loading your balances...</p>
        ) : (
            balances.map(({ balance, symbol }, index) => (
                <div key={index}>
                  {balance} {symbol}
                </div>
          ))
        )}
      </div>
      <div className='flex w-full btn btn-primary' onClick={handleAddLiquidity}>Add Liquidity</div>
    </div>
  );
};

export default JoinPool;
