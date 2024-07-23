import { CrownOutlined, DockerOutlined, FileTextOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Card, Statistic, Tag } from "antd";
import React from "react";

let name: string = "react";
let times: number = 1.47;
let description1 = "Hooks for managing, caching, and syncing asynchronous and remote data in React. For more information visit our repository."

const Result = () => {
  return (
    <Card
      title={
        <div>
          ✨ {name} is <span style={{ fontSize: "24px" }}>{times}x</span> better
          ✨
        </div>
      }
      style={{ borderRadius: "0px", width: "60%", margin: "0 20%" }}
    >
      <div className="result">
        <div style={{fontSize: "1.2rem", width:"50%"
        }}>
          
          <span style = {{width: "100%"}}>
          <CrownOutlined style = {{marginRight: "3%"}}></CrownOutlined>
            <strong>react-query</strong> <Tag color="processing" style = {{marginLeft: "2%",borderRadius: "2px"}}>recommended</Tag>
          </span>
          <br></br>
          <p style={{fontSize: "1rem",marginBottom: "2%"}}>{description1}</p>
          <Tag>Typescript</Tag >
          <Tag>Javascript</Tag >
          <div className = "icons">
          <InfoCircleOutlined style = {{fontSize: "22px", color: "#1890FF"
          }}/>
          <span style = {{fontSize: "14px"}}>Repository</span>
          <FileTextOutlined style = {{fontSize: "22px", color: "#1890FF"
          }}/>
          <span style = {{fontSize: "14px"}}>Documentation</span>
          </div>
        </div>
        <div className="stats">
          <Statistic title="Downloads" value={"512K+"}></Statistic>
          <Statistic title="Stars" value={"24.7K+"}></Statistic>
          <Statistic title="Health" value={"75%"}></Statistic>
        </div>
      </div>
    </Card>
  );
};

export default Result;
