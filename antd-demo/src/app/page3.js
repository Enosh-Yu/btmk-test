'use client'

import React from 'react'
import { Button, ConfigProvider } from 'antd'

import theme from './theme/themeConfig.js'

const HomePage = () => (
  <ConfigProvider theme = {theme}>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
);

export default HomePage;