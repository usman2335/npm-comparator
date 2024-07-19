import { SearchOutlined } from '@ant-design/icons'
import { Button, Card, Select } from 'antd'

const Icon = () =>
{
    return (<SearchOutlined/>);
}
const SearchBar = () => {
  return (
    // <div style = {{
    //     width: "50%",
    //     marginLeft: "25%"
    // }}>
    <Card
     style = {{
        display: "flex",
        marginTop: "2rem",
        borderRadius: "0px",
        width: "60%",
        margin: "3rem 20%"
    }}>
        <Select
        placeholder = "Select two packages to compare"
        style = {
            {
                width: "85%",
                borderRadius: "0px"
            }
        }></Select>
        <Button 
        style = {{
            borderRadius: "0px",
            position: "relative",
            top: "1px",
            width: "12%",
            backgroundColor: "#F5F5F5",
            color: "#00000040"
        }}
        icon = {<SearchOutlined/>}>
            Compare
        </Button>

    </Card>
    // </div>
  )
}

export default SearchBar