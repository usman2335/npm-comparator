import { Card } from 'antd'
import React from 'react'
import { Line } from '@ant-design/plots';



const Graph = () => {
    const data = [
        { date: '2022-11-01', value: 8000 },
        { date: '2022-12-01', value: 5000 },
        { date: '2023-01-01', value: 10000 },
        { date: '2023-02-01', value: 11000 },
      ];
    
      const config = {
        data,
        height: 300,
        xField: 'date',
        yField: 'value',
        
      };
  return (
    <Card
    style = {{
        borderRadius: "0px",
        width: "60%",
        margin: "2rem 20%",
    }}
    
    title = "Downloads"> <Line{...config} /></Card>
  )
}

export default Graph