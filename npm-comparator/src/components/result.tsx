import { CrownOutlined, DockerOutlined, FileTextOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Card, Statistic, Tag } from "antd";
import React from "react";
import { dataFetcherPackage } from "../fetchData";
import numeral from 'numeral'
interface Props {
  selectedOption1: string,
  selectedOption2: string;
}
const Result = ({selectedOption1, selectedOption2} : Props) => {
  let data1: any = [];
  let data2: any = [];
  let score1: number;
  let score2: number;
  let timesX: number = 0;
  let countDownloads: number = 0;
  let countStars: number = 0;
  let countHealth: number = 0;
  let winner: any = [];
  let name: string = '';
  let description: string = '';
  let repo: string = '';
  let homepage: string = '';
  function formatDownloads(count: number, format: string): string {
    if(format !== '%')
    {
      return numeral(count).format(`0${format}`) + '+';
    }
    return numeral(count).format(`0${format}`);
    
  }
  if(data1.length == 0 || data2.length == 0)
  {
    data1= dataFetcherPackage(selectedOption1);
    data2 = dataFetcherPackage(selectedOption2);
    
  }
  if(data1.length > 0  && data2.length > 0)
  {
    score1 = ((0.2 * data1[0].communityInterest) + (0.5 * data1[0].downloadsCount) + (0.3 *(data1[0].tests+data1[0].carefulness)));
    score2 = ((0.2 * data2[0].communityInterest) + (0.5 * data2[0].downloadsCount) + (0.3 *(data2[0].tests+data2[0].carefulness)));

    if(score1 > score2)
    {
      timesX = score1 / score2;
      winner = data1;
    }
    else{
      timesX = score2/score1;
      winner = data2;

    }
    name = winner[0].name;
    description = winner[0].description;
    repo = winner[0].links.repository;
    homepage = winner[0].links.homepage;
    countDownloads =winner[0].downloadsCount;
    countStars =winner[0].stars;
    countHealth=winner[0].health;
  }

  return (
    <Card
      title={
        <div>
          ✨ {name} is <span style={{ fontSize: "24px" }}>{Math.round(timesX * 100) / 100}x</span> better
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
            <strong>{name}</strong> <Tag color="processing" style = {{marginLeft: "2%",borderRadius: "2px"}}>recommended</Tag>
          </span>
          <br></br>
          <p style={{fontSize: "1rem",marginBottom: "2%"}}>{description}. For more information visit our repository</p>
          <Tag>Typescript</Tag >
          <Tag>Javascript</Tag >
          <div className = "icons">
          <InfoCircleOutlined style = {{fontSize: "22px", color: "#1890FF"
          }}/>
          <span style = {{fontSize: "14px"}}><a href = {repo}>Repository</a></span>
          <FileTextOutlined style = {{fontSize: "22px", color: "#1890FF"
          }}/>
          <span style = {{fontSize: "14px"}}><a href = {homepage}>Documentation</a></span>
          </div>
        </div>
        <div className="stats">
          <Statistic title="Downloads" value={formatDownloads(countDownloads,'a')}></Statistic>
          <Statistic title="Stars" value={formatDownloads(countStars,'a')}></Statistic>
          <Statistic title="Health" value={formatDownloads(countHealth,'%')}></Statistic>
        </div>
      </div>
    </Card>
  );
};

export default Result;
