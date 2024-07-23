import { Card, Table } from 'antd'
import type { TableProps } from 'antd'
import React from 'react'
import dataFetcherName from '../fetchData';


interface Props {
  selectedOption1: string,
  selectedOption2: string;
}
interface DataType {
    key: string;
    description1: string;
    description2: string;

  }



const Comparison = ({selectedOption1, selectedOption2} : Props) => {


  const columns: TableProps<DataType>['columns'] = [
    {title: 'Package Name',
      dataIndex: 'key',
      rowScope: 'row',
      width: '20%'

    },
    
    {title: 'package1name',
      dataIndex: 'description1',
      width: '40%',
      align: 'center'
    },
    {title: 'package2name',
      dataIndex: 'description2',
      align: 'center'
      
    },


]

const data: DataType[] = [
    {
      key: 'Description',
      description1: 'Hooks for managing, caching, and syncing asynchronous and remote data',
      description2: 'React Hooks library for remote data fetching',
    },
    {
     key: 'Keywords',
     description1: 'N/A',
     description2: 'N/A'
    },
    {
     key: 'Repository',
     description1: 'HomePage Bugs Github',
     description2: 'HomePage Bugs Github'
    },
    {
     key: 'License',
     description1: 'MIT',
     description2: 'MIT'
    },
    {
     key: 'Last Modification Date',
     description1: 'A month ago',
     description2: 'A month ago'
    },
    {
     key: 'Authors/Publishers',
     description1: 'tannerlinsely',
     description2: 'N/A'
    },
    {
     key: 'data',
     description1: 'tannerlinsley@gmail.com',
     description2: 'aaron.brown@vercel.com'
    }
    ]


  console.log(selectedOption2);
  console.log(selectedOption1);
  const data1 = dataFetcherName(selectedOption1);
  const data2 = dataFetcherName(selectedOption2);
  if(data1.length >0 && data2.length >0)
  {
    columns[1].title = data1[0].package.name;
    columns[2].title = data2[0].package.name;

    // columns[1].dataIndex
  }

  
  return (
    <Card
    style = {{
        borderRadius: "0px",
        width: "60%",
        margin: "0 20%",
        // height: "65vh"
    }}
    title = "Comparison">
    <Table columns={columns} dataSource={data} bordered  pagination = {false}></Table>    
    </Card>
  )
}

export default Comparison