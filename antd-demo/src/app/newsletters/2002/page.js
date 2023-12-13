'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};
const items = [
  {
    key: '1',
    label: <Link href="/newsletters">{'Newsletters:'}</Link>,
  },
    {
    key: '2',
    label: <Link href="/newsletters/2006-2007">{'2006-2007'}</Link>,
  },
  {
    key: '3',
    label: <Link href="/newsletters/2005">{'2005'}</Link>,
  },
  {
    key: '4',
    label: <Link href="/newsletters/2004">{'2004'}</Link>,
  },
  {
    key: '5',
    label: <Link href="/newsletters/2003">{'2003'}</Link>,
  },
  {
    key: '6',
    label: <Link href="/newsletters/2002">{'2002'}</Link>,
  },
  {
    key: '7',
    label: <Link href="/newsletters/2001">{'2001'}</Link>,
  },
  {
    key: '8',
    label: <Link href="/newsletters/2000">{'2000'}</Link>,
  },
  {
    key: '9',
    label: <Link href="/newsletters/1999">{'1999'}</Link>,
  },
  {
    key: '10',
    label: <Link href="/newsletters/1998">{'1998'}</Link>,
  },
  {
    key: '11',
    label: <Link href="/newsletters/whatis">{'"What is..." Articles'}</Link>,
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
        defaultSelectedKeys={['5']}
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
      <div style={{ background: 'beige', }}>
        <h2>Radio Newsletters</h2>
        <p>The Hearing of Faith</p></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link href="/newsletters">Radio Newsletters</Link></Breadcrumb.Item>
          <Breadcrumb.Item>2002</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="6" items={items} onChange={onChange} />
          <h2> 2002 </h2>
          <Card>
            <h3>January <FilePdfOutlined /></h3>
          </Card>
          <Card>            
            <h3>February <FilePdfOutlined /></h3>
          </Card>
          <Card>
            <h3>March <FilePdfOutlined /></h3>
          </Card>
          <Card>            
            <h3>April <FilePdfOutlined /></h3>
          </Card>
          <Card>
          <h3>May <FilePdfOutlined /></h3>
          </Card>
          <Card>            
            <h3>June <FilePdfOutlined /></h3>
          </Card>
          <Card>
          <h3>July <FilePdfOutlined /></h3>
          </Card>
          <Card>            
            <h3>August <FilePdfOutlined /></h3>
          </Card>
          <Card>
          <h3>September <FilePdfOutlined /></h3>
          </Card>
          <Card>            
            <h3>October <FilePdfOutlined /></h3>
          </Card>
          <Card>
          <h3>November <FilePdfOutlined /></h3>
          </Card>
          <Card>            
            <h3>December <FilePdfOutlined /></h3>
          </Card>
 
      <Divider /></div>
      
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