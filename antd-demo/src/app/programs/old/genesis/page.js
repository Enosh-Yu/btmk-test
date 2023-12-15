'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader, Button, Flex, Collapse } from 'antd';

import { HomeOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: '1',
    label: 'The General Sketch and Central Thought (1)',
    children: <p>Title: The General Sketch and Central Thought (1)<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 1</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p></p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p></p>,
  },
];

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
          <Breadcrumb.Item><Link href="/programs">Programs</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Genesis</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <div style={{ padding: 12, minHeight:240}}>

      <p>Life-study of the Bible with Witness Lee is a 30-minute radio broadcast composed of excerpts from Witness Lee's spoken ministry that focuses on the enjoyment of the divine life as revealed in the Scriptures. The ministry portions are followed by a discussion of the portion presented, including questions and answers.</p>
        <section>
          <Cascader options={options} onChangeCas={onChangeCas} placeholder="Select a Life-study..." />
        <Flex gap="small" wrap="wrap">
          <Button disabled="true"><LeftCircleOutlined/>Prev</Button>
          <Link href="./exodus"><Button>Next<RightCircleOutlined/></Button></Link>
        </Flex>
        </section>
          <h2> Genesis (134) </h2>
          <p>Subject: God Created, Satan Corrupted, Man Fell, and Jehovah Promised to Save</p>
          <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />

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