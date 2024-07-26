import { Card, Table, Tag } from "antd";
import type { TableProps } from "antd";
import React from "react";
import { dataFetcherPackage } from "../fetchData";

interface Props {
  selectedOption1: string;
  selectedOption2: string;
}
interface DataType {
  key: string;
  description1: React.ReactNode;
  description2: React.ReactNode;
}

const Comparison = ({ selectedOption1, selectedOption2 }: Props) => {
  const columns: TableProps<DataType>["columns"] = [
    { title: "Package Name", dataIndex: "key", rowScope: "row", width: "20%" },

    {
      title: "package1name",
      dataIndex: "description1",
      width: "40%",
      align: "center",
    },
    { title: "package2name", dataIndex: "description2", align: "center" },
  ];

  let data1: any = [];
  let data2: any = [];
  let data: DataType[] = [];
  if (data1.length == 0 || data2.length == 0) {
    data1 = dataFetcherPackage(selectedOption1);
    data2 = dataFetcherPackage(selectedOption2);
  }

  if (data1.length > 0 && data2.length > 0) {

    columns[1].title = data1[0].name + ` (${data1[0].version})`;
    columns[2].title = data2[0].name + ` (${data2[0].version})`;
    let date1 = data1[0].date;
    let date2 = data2[0].date;
    data = [
      {
        key: "Description",
        description1: data1[0].description,
        description2: data2[0].description,
      },
      {
        key: "Keywords",
        description1:
          data1[0].keywords == undefined  ? "N/A":  ( <div className ="desc">
            <Tag>{data1[0].keywords[0]}</Tag>
            <Tag>{data1[0].keywords[1]}</Tag>
            <Tag>{data1[0].keywords[2]}</Tag>
          </div>),
        description2:
        data1[0].keywords == undefined  ? "N/A":  ( <div className ="desc">
          <Tag>{data2[0].keywords[0]}</Tag>
          <Tag>{data2[0].keywords[1]}</Tag>
          <Tag>{data2[0].keywords[2]}</Tag>
        </div>),
      },
      {
        key: "Repository",
        description1: (
          <div className ="desc">
            <a href={data1[0].links.homepage}>Homepage</a>
            <a href={data1[0].links.bugs}>Bugs</a>
            <a href={data1[0].links.repository}>GitHub</a>
          </div>
        ),
        description2: (
          <div className = "desc">
            <a href={data2[0].links.homepage}>Homepage</a>
            <a href={data2[0].links.bugs}>Bugs</a>
            <a href={data2[0].links.repository}>GitHub</a>
          </div>
        ),
      },
      {
        key: "License",
        description1: (<Tag color = "orange" >{data1[0].license}</Tag>),
        description2: (<Tag color = "orange">{data1[0].license}</Tag>),
      },
      {
        key: "Last Modification Date",
        description1: date1.slice(0,10),
        description2: date2.slice(0,10),
      },
      {
        key: "Authors/Publishers",
        description1:
          data1[0].author != undefined ? data1[0].author.name : "N/A",
        description2:
          data2[0].author != undefined ? data2[0].author.name : "N/A",
      },
      {
        key: "Maintainers",
        description1:
          data1[0].maintainers != "" ? data1[0].maintainers[0].email : "N/A",
        description2:
          data2[0].maintainers != "" ? data2[0].maintainers[0].email : "N/A",
      },
    ];
  }

  return (
    <Card
      style={{
        borderRadius: "0px",
        width: "60%",
        margin: "0 20%",
      }}
      title="Comparison"
    >
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
      ></Table>
    </Card>
  );
};

export default Comparison;
