import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Select } from "antd";
import type { SelectProps } from "antd";
import { useState } from "react";
import dataFetcherName from "../fetchData";

const filterOptions: string[] = [];


interface props {
  onCompare: (selectedOption1 : string, selectedOption2:string) => void;
}



const SearchBar = ({ onCompare }: props) => {


  const [selectedValues, setSelectedValues] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  
  
  const options: SelectProps["options"] = [];
  const data = dataFetcherName(searchTerm);
  if(searchTerm !== "")
  {
   
    if(data.length >0){
      data.forEach((item,index)=>{
        options.push({
          value: item.package.name
        })
      })
    }
    
  }
  else{
    while(options.length > 0 || selectedValues == 1 ) 
    {
      options.pop();
    }
  }
  
  
  
 
  const handleChange = (value: string) => {
    setSelectedValues(value.length);
    setSelectedOption1(value[0]);
    setSelectedOption2(value[1]);
  };
  
  const handleCompare = () => {
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {   //acting as an api call
      setLoading(false);
      setDisabled(false);
      onCompare(selectedOption1,selectedOption2);
    }, 2000);
  };

  const handleSearch = (value : string) => {
    setSearchTerm(value);
  }


  return (
    <Card
      style={{
        display: "flex",
        marginTop: "2rem",
        borderRadius: "0px",
        width: "60%",
        margin: "3rem 20%",
      }}
    >
      <Select
        mode="multiple"
        disabled={disabled}
        placeholder="Select two packages to compare"
        options={options}
        onChange={handleChange}
        onSearch = {handleSearch}
        maxCount={2}
        notFoundContent={"No results found"}
        style={{
          width: "85%",
          borderRadius: "0px",
        }}
      ></Select>
      <Button
        type="primary"
        disabled={selectedValues != 2}
        onClick={handleCompare}
        loading={loading}
        style={{
          borderRadius: "0px",
          position: "relative",
          top: "1px",
          width: "12%",
        }}
        icon={<SearchOutlined />}
      >
        Compare
      </Button>
    </Card>
  );
};

export default SearchBar;
