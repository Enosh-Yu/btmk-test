'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const options = [
  {
    value: 'Old Testament',
    label: 'Old Testament',
  },
  {
    value: 'Genesis',
    label: <Link href="/programs/old/genesis">{'Genesis'}</Link>,
  },
  {
    value: 'Exodus',
    label: <Link href="/programs/old/exodus">{'Exodus'}</Link>,
  },
];
const onChangeCas = (value) => {
  value;
};

const onChange = (key) => {
    key;
  };
  const items = [
    {
      key: '1',
      label: 'Old Testament',
    },
    {
      key: '2',
      label: <Link href="/programs/new">{'New Testament'}</Link>,
    },
  ];


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">
    <Header>
      <div className="menu" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link href="/"><HomeOutlined /></Link></Menu.Item>
        <Menu.Item key="2"><Link href="/programs">Programs</Link></Menu.Item>
        <Menu.Item key="3"><Link href="/printed-life-studies">Printed Life-studies</Link></Menu.Item>
        <Menu.Item key="4"><Link href="/schedule">Schedule</Link></Menu.Item>
        <Menu.Item key="5"><Link href="/newsletters">Newsletters</Link></Menu.Item>
        <Menu.Item key="6"><Link href="/scripture-commentary">Scripture & Commentary</Link></Menu.Item>
        <Menu.Item key="7"><Link href="/contact-us">Contact Us</Link></Menu.Item>
      </Menu>
    </Header>
      <div style={{ background: 'beige', minHeight: 30 }}>
        <h2>Radio Programs</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Programs</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <div style={{ padding: 12, minHeight:240}}>

      <section><p>* Programs may be downloaded for personal use.</p>
      <Cascader options={options} onChangeCas={onChangeCas} placeholder="Select a Life-study..." />
      </section>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          <h2> Old Testament </h2>
              <Card><Link href="/programs/old/genesis">Genesis</Link></Card>
              <Card><Link href="/programs/old/exodus">Exodus</Link></Card>
              <Card>Leviticus</Card>
              <Card>Numbers</Card>
              <Card>Deuteronomy</Card>

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