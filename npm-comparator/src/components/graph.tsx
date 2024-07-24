import { Card } from 'antd'
import React from 'react'
import { Line } from '@ant-design/plots';

import { dataFetcherPackage } from '../fetchData';
interface Props {
  selectedOption1: string,
  selectedOption2: string;
}

interface DataType {
  key: string;
  description1: string;
  description2: string;

}

const Graph = ({selectedOption1, selectedOption2} : Props) => {
  let data1: any = [];
  let data2: any = [];
  let package1Data : DataType[] = [];
  let package2Data : DataType[] = [];
  if(data1.length == 0 || data2.length == 0)
  {
    data1= dataFetcherPackage(selectedOption1);
    data2 = dataFetcherPackage(selectedOption2);
    
  }
  // console.log(data1);
  if(data1.length > 0  && data2.length > 0)
  {
    package1Data = data1[0].downloads;
    package2Data = data2[0].downloads;
  }
 
  
    // const graphData = [
    //     { date: '2022-11-01', value: 8000 },
    //     { date: '2022-12-01', value: 5000 },
    //     { date: '2023-01-01', value: 10000 },
    //     { date: '2023-02-01', value: 11000 },
    //   ];
    
      const config = {
        data: package1Data,
        height: 500,
        xField: 'from',
        yField: 'count',
        
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