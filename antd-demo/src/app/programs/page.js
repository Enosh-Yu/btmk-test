'use client'
import React from 'react';

import { Breadcrumb, Layout, Menu, theme, Tabs } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
    key;
  };
  const items = [
    {
      key: '1',
      label: 'Old Testament',
      children: 'Content 1',
    },
    {
      key: '2',
      label: 'New Testament',
      children: 'Content 2',
    },
  ];



const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><a href="/"><HomeOutlined/></a></Menu.Item>
        <Menu.Item key="2"><a href="/programs">Programs</a></Menu.Item>
        <Menu.Item key="3"><a href="/printed-life-studies">Printed Life-studies</a></Menu.Item>
        <Menu.Item key="4"><a href="/schedule">Schedule</a></Menu.Item>
        <Menu.Item key="5"><a href="/newsletters">Newsletters</a></Menu.Item>
        <Menu.Item key="6"><a href="/scripture-commentary">Scripture & Commentary</a></Menu.Item>
        <Menu.Item key="7"><a href="/contact-us">Contact Us</a></Menu.Item>
      </Menu>
      </Header>
      <div style={{ background: 'beige', minHeight: 30 }}>
        <h2>Radio Programs</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
          <Breadcrumb.Item>Programs</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', }}>
      <div style={{ background: 'white', padding: 12, minHeight:240}}>

      <section>* Programs may be downloaded for personal use.</section>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        

      
      
      
      
      
      </div>
      
      </Content>
   

    <Menu
        mode="horizontal"
        style={{ background: 'beige', lineHeight: '48px' }}
      >
        <Menu.Item key="8">Today's Broadcast</Menu.Item>
        <Menu.Item key="9">Other LSM Sites</Menu.Item>
        <Menu.Item key="10">Espanol</Menu.Item>
    </Menu>
      <Footer style={{ textAlign: 'center', }}>
      © 1997-2023 Living Stream Ministry. All rights reserved. Reproduction in whole or in part is prohibited.
      </Footer>
    </Layout>
  );
};
export default App;