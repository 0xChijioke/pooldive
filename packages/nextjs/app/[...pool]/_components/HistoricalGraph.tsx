import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Area } from 'recharts';


const HistoricalGraph = ({ data } : {data: any}) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={800}
          height={400}          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 40,
          }}>
        <CartesianGrid strokeDasharray="2 5" strokeOpacity={0.1} />
        <XAxis dataKey="block" tick={false} />
        <YAxis />
        <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                // console.log(data)
                return (
                  <div className="w-fit h-fit space-y-2 p-4 rounded-lg pt-1 text-base bg-base-100">
                    <p className=''>Liquidity: {`${Number(data.poolLiquidity).toFixed(2)}`}</p>
                    <p className=''>Shares: {`${Number(data.poolTotalShares).toFixed(2)}`}</p>
                    
                  </div>
                );
              }
              return null;
            }}
          />
        {/* <Legend /> */}
        <Area
            type="monotone"
            dataKey="poolLiquidity"
            dot={false}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTotal)"
            strokeWidth={1.3} />
        {/* <Line type="monotone" dataKey="poolTotalShares" dot={false} stroke="#82ca9d" strokeWidth={1} /> */}
        </ComposedChart>
      </ResponsiveContainer>
            
  )
}

export default HistoricalGraph;