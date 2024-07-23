import React from 'react'
import {Layout, Space, Typography} from "antd"
import { HomeFilled } from '@ant-design/icons'
const Header = () => {
  return (
    <Layout.Header
    style = {{
      backgroundColor: 'white'
    }}
    >
        <Space align = "center" size = "middle" style = {{
          backgroundColor : "transparent",

        }}>
        <HomeFilled />
        <h3>NPM Package Comparator</h3>
        <Typography.Text type = "secondary"> Compare & Recommend the best NPM package</Typography.Text>
            
        </Space>

    </Layout.Header>
  )
}

export default Header

