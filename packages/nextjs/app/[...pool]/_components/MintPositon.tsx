import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getCurrencyBalance } from '~~/app/libs/balance'
import {
  getPositionIds,
  getPositionInfo,
  mintPosition,
  PositionInfo,
} from '~~/app/libs/position'
import {
  connectBrowserExtensionWallet,
  getProvider,
  TransactionState,
  Environment, 
  CurrentConfig 
} from '~~/common/config'
import { useAccount } from 'wagmi'
import { Token } from '@uniswap/sdk-core'
 

const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
  useEffect(() => {
    const subscription = getProvider()?.on('block', callback)
    return () => {
      subscription?.removeAllListeners()
    }
  })
}

const MintPosition: React.FC<{ token0: Token; token1: Token; }> = ({token0, token1 } : {token0: any, token1: any}) => {
    const { address } = useAccount();
    const [token0Balance, setToken0Balance] = useState<string>()
    const [token1Balance, setToken1Balance] = useState<string>()
    const [positionIds, setPositionIds] = useState<number[]>([])
    const [positionsInfo, setPositionsInfo] = useState<PositionInfo[]>([])
    const [txState, setTxState] = useState<TransactionState>(TransactionState.New)
    const [blockNumber, setBlockNumber] = useState<number>(0)

    if (!address) {
        return <div>Connect your wallet</div>
    }

    // Listen for new blocks and update the wallet
    useOnBlockUpdated(async (blockNumber: number) => {
        refreshBalances()
        setBlockNumber(blockNumber)
    })


    // Update wallet state given a block number
    const refreshBalances = useCallback(async () => {
        const provider = getProvider()
        if (!provider || !address) {
        return
        }

        // Set Balances
        setToken0Balance(
        await getCurrencyBalance(provider, address, token0)
        )
        setToken1Balance(
        await getCurrencyBalance(provider, address, token1)
        )

        // Set Position Info
        const ids = await getPositionIds({address})
        setPositionIds(ids)
        setPositionsInfo(await Promise.all(ids.map(getPositionInfo)))
    }, [])

    // Event Handlers

    const onConnectWallet = useCallback(async () => {
        if (await connectBrowserExtensionWallet()) {
        refreshBalances()
        }
    }, [refreshBalances])

    const onMintPosition = useCallback(async () => {
        setTxState(TransactionState.Sending)
        setTxState(await mintPosition({address, token0, token1}))
    }, [])

    // Formatted Data

    const positionInfoStrings: string[] = useMemo(() => {
        if (positionIds.length !== positionsInfo.length) {
        return []
        }

        return positionIds
        .map((id, index) => [id, positionsInfo[index]])
        .map((info) => {
            const id = info[0]
            const posInfo = info[1] as PositionInfo
            return `${id}: ${posInfo.liquidity.toString()} liquidity, owed ${posInfo.tokensOwed0.toString()} and ${posInfo.tokensOwed1.toString()}`
        })
    }, [positionIds, positionsInfo])

    return (
      
        <>        
            {/* <h3>{`Block Number: ${blockNumber + 1}`}</h3>
            <h3>{`Transaction State: ${txState}`}</h3> */}
                <h3 className={'text-center'}>Your token balances</h3>
            <div className="flex w-[300px] justify-between">
                {token0Balance !== undefined && token0 !== undefined && (
                    <div>{`${token0Balance} ${token0.symbol}`}</div>
                )}
                {token1Balance !== undefined && token1 !== undefined && (
                    <div>{`${token1Balance} ${token1.symbol}`}</div>
                )}
            </div>
            <button
                className='btn btn-primary rounded-lg' 
                onClick={() => onMintPosition()}
                disabled={
                txState === TransactionState.Sending ||
                getProvider() === null ||
                CurrentConfig.rpc.mainnet === ''
                }>
                <p>Mint Position</p>
            </button>
            <div>
                Positions:{' '}
                {positionInfoStrings.map((s, i) => (
                <p key={i}>{s}</p>
                ))}
            </div>
        </>
    )
}

export default MintPosition;