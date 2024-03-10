import React, { useState, useCallback, useEffect } from 'react'
import './UniLiquidity.css'
import { getFullPool } from '~~/app/libs/poolData'
import { BarChartTick } from '~~/app/libs/interfaces'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { Pool } from '@uniswap/v3-sdk'
import { Token } from '@uniswap/sdk-core'

export interface PoolData {
  pool: Pool
  ticks: BarChartTick[]
}

const UniLiquidity: React.FC<{ token0: Token; token1: Token; }> = ({token0, token1 } : {token0: any, token1: any}) => {
  const [poolData, setPool] = useState<PoolData | undefined>()

  const onReload = useCallback(async () => {
    setPool(undefined)
    setPool(await getFullPool({token0, token1 }))
  }, [])

  useEffect(() => {
    getFullPool({token0, token1 }).then((data) => setPool(data))
  }, [])

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && poolData) {
      const tick = payload[0].payload
      const pool = poolData.pool
      return (
        <div className="custom-tooltip">
          {tick.isCurrent ? (
            <div>
              <p className="tooltip-label">
                {pool.token0.symbol} locked:{' '}
                {tick.liquidityLockedToken0.toFixed(3)}
              </p>
              <p className="tooltip-label">
                {pool.token1.symbol} locked:{' '}
                {tick.liquidityLockedToken1.toFixed(3)}
              </p>
            </div>
          ) : tick.tickIdx < pool.tickCurrent ? (
            <p className="tooltip-label">
              {pool.token0.symbol} locked:{' '}
              {tick.liquidityLockedToken0.toFixed(3)}
            </p>
          ) : (
            <p className="tooltip-label">
              {pool.token1.symbol} locked:{' '}
              {tick.liquidityLockedToken1.toFixed(3)}
            </p>
          )}
          <p className="tooltip-label">
            Price {pool.token0.symbol}: {tick.price0.toFixed(4)}
            {pool.token1.symbol}
          </p>
          <p className="tooltip-label">
            Price {pool.token1.symbol}: {tick.price1.toFixed(4)}
            {pool.token0.symbol}
          </p>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className="w-full">
      <div className="pool-data">
        <h3>Liquidity density</h3>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {poolData !== undefined ? (
          <BarChart
            width={500}
            height={800}
            data={poolData.ticks}
            margin={{
              top: 30,
              right: 20,
              left: 20,
              bottom: 30,
            }}
            barGap={0}>
            <XAxis tick={false} />
            <YAxis
              tick={false}
              axisLine={false}
              padding={{ top: 0, bottom: 2 }}
            />
            <Tooltip isAnimationActive={true} content={<CustomTooltip />} />
            <Bar
              dataKey="liquidityActive"
              fill="#2172E5"
              isAnimationActive={true}>
              {poolData.ticks?.map((entry, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isCurrent ? '#F51E87' : '#2172E5'}
                  />
                )
              })}
            </Bar>
          </BarChart>
        ) : (
          <div className="flex w-full items-center h-full justify-center"><span className="loading loading-ring loading-lg"></span></div>
        )}
      </ResponsiveContainer>
      {poolData !== undefined ? (
        <button onClick={onReload} className="btn hidden">
          <p>Update</p>
        </button>
      ) : (
        <button className="btn-inactive">
          <span className="loading loading-ring loading-lg"></span>
        </button>
      )}
    </div>
  )
}

export default UniLiquidity;