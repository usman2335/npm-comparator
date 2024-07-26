import { Card } from 'antd'



import { dataFetcherPackage } from '../fetchData';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
interface Props {
  selectedOption1: string,
  selectedOption2: string;
}

interface DataType {
 from: string,
 count: number

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
  if(data1.length > 0  && data2.length > 0)
  {
    package1Data = data1[0].downloads;
    package2Data = data2[0].downloads;
    const labels = [
      ...new Set([
        ...package1Data.map((data) => (data.from).slice(0,10)),
        ...package2Data.map((data) => (data.from).slice(0,10)),
      ]),
    ].sort();
    const data = {
      labels,
      datasets: [
        {
          label: data1[0].name,
          data: labels.map((label) => {
            const entry = package1Data.find((item) => (item.from).slice(0,10) === label);
            return entry ? entry.count : 0;
          }),
          borderColor: '#33D633',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: false,
          tension: 0.3
        },
        {
          label: data2[0].name,
          data: labels.map((label) => {
            const entry = package2Data.find((item) => (item.from).slice(0,10) === label);
            return entry ? entry.count : 0;
          }),
          borderColor: '#0A78FF',
          backgroundColor: 'rgba(255,99,132,0.2)',
          fill: false,
          tension: 0.3
        },
      ],
    };
    
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Package Downloads Comparison',
        },
        legend: {
          display: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Downloads',
          },
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 3,
          },
        },
      },
    };
    
    return (
      <Card
      style = {{
          borderRadius: "0px",
          width: "60%",
          margin: "2rem 20%",
      }}
      title = "Downloads"> 
      <Line data = {data} options = {options} style = {{width: "100%"}}></Line>
      </Card>
    )
  }
 
}

export default Graph