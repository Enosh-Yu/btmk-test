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
    label: 'Newsletters:',
  },
    {
    key: '2',
    label: '2006-2007',
  },
  {
    key: '3',
    label: '2005',
  },
  {
    key: '4',
    label: '2004',
  },
  {
    key: '5',
    label: '2003',
  },
  {
    key: '6',
    label: '2002',
  },
  {
    key: '7',
    label: '2001',
  },
  {
    key: '8',
    label: '2000',
  },
  {
    key: '9',
    label: '1999',
  },
  {
    key: '10',
    label: '1998',
  },
  {
    key: '11',
    label: '"What is..." Articles',
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
          <Breadcrumb.Item>Radio Newsletters</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Divider /></div>
      <section><div>
        <Card style={{ display: 'flex', backgroundColor: 'lightgray', color: 'darkblue' }}>
        <p>“He therefore who bountifully supplies to you the Spirit...does he do it out of the works of law or out of the hearing of faith?”</p>
        <p style={{textAlign: 'right'}}>Galatians 3:5</p>
      </Card>
          <p>Life-study of the Bible, a monumental and classic work by Witness Lee, builds upon and is a further development of all that the Lord has revealed to His church in the past centuries. It is filled with the revelation concerning the processed Triune God, the living Christ, the life-giving Spirit, the experience of life, and the definition and practice of the church.</p>
        <p>Also see "What is the Life-study of the Bible?".</p></div>
        <div><img src="hearing-of-faith.png" width="200" height="200"/></div>      
        </section>
   

   

      
      
      
      
      

      
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