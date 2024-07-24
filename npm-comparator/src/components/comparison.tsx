import { Card, Table } from 'antd'
import type { TableProps } from 'antd'
import React from 'react'
import dataFetcherName from '../fetchData';
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




  // console.log(selectedOption2);
  // console.log(selectedOption1);
  let data1: any = [];
  let data2: any = [];
  let data : DataType[] = [];
  if(data1.length == 0 || data2.length == 0)
  {
    data1= dataFetcherPackage(selectedOption1);
    data2 = dataFetcherPackage(selectedOption2);
    
  }
  
   if(data1.length >0 && data2.length >0)
   {
    // console.log(data2[0].maintainers);
    // console.log(data1[0].license);
    // console.log(data1[0].maintainers);
    columns[1].title = data1[0].name + ` (${data1[0].version})`;
    columns[2].title = data2[0].name+ ` (${data2[0].version})`;
    data = [
      {
        key: 'Description',
        description1:  data1[0].description,
        description2:  data2[0].description,
      },
      {
       key: 'Keywords',
       description1:  data1[0].keywords != undefined ? data1[0].keywords : 'N/A',
       description2:  data2[0].keywords != undefined ? data1[0].keywords : 'N/A',
      },
      {
       key: 'Repository',
       description1: 'HomePage Bugs Github',
       description2: 'HomePage Bugs Github'
      },
      {
       key: 'License',
       description1: data1[0].license,
       description2: 'MIT'
      },
      {
       key: 'Last Modification Date',
       description1:  data1[0].date,
       description2:  data2[0].date,
      },
      {
       key: 'Authors/Publishers',
       description1:  data1[0].author != undefined ? data1[0].author.name : 'N/A',
       description2:  data2[0].author != undefined ? data2[0].author.name : 'N/A',
      },
      {
       key: 'Maintainers',
       description1:  data1[0].maintainers != "" ? data1[0].maintainers[0].email : 'N/A',
       description2:  data2[0].maintainers != "" ? data2[0].maintainers[0].email : 'N/A',
      }
      ]

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