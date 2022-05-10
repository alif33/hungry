import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';
const ChartOne = () => {
    const data = [
        { name: "Positive", value: 2000 },
        { name: "Neutral", value: 1000 },
        { name: "Negative", value: 3000 },
    ]
    return (
        <div className='mx-auto md:mx-0'>
            <PieChart width={300} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                // label
                />
                <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default ChartOne