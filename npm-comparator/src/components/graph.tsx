import { Card } from 'antd'
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
  // let package2Data : DataType[] = [];
  if(data1.length == 0 || data2.length == 0)
  {
    data1= dataFetcherPackage(selectedOption1);
    data2 = dataFetcherPackage(selectedOption2);
    
  }
  if(data1.length > 0  && data2.length > 0)
  {
    package1Data = data1[0].downloads;
    // package2Data = data2[0].downloads;
  }
 
    
      const config = {
        data: package1Data,
        height: 500,
        xField: 'from',
        yField: 'count',
        
      };
      // const config2 = {
      //   data: package2Data,
      //   height: 500,
      //   xField: 'from',
      //   yField: 'count',
        
      // };
  return (
    <Card
    style = {{
        borderRadius: "0px",
        width: "60%",
        margin: "2rem 20%",
    }}
    
    title = "Downloads"> <Line{...config}  /></Card>
  )
}

export default Graph