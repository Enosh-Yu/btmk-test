'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card } from 'antd';

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};
const items = [
  {
    key: '1',
    label: 'United States',  
  
  },
  {
    key: '2',
    label: <Link href="/schedule/int">{'International'}</Link>,
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
        defaultSelectedKeys={['4']}
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
        <h2>Broadcast Schedule</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Broadcast Schedule: United States</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white' }}>
      <div style={{ padding: 12 }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          <h2> United States </h2>
          <Card><h3 style={{color:"brown"}}>California</h3>
          <section >
            <div>
              <h4>Anaheim</h4>
              <p>Station: KOCL 101.5 FM</p>
              <p>Daily</p>
            </div>
            <div></div>
            <div>
              <h4>Los Angeles</h4>
              <p>Station: KKLA 99.5 FM</p>
              <p>Sundays: 8:30pm</p>
            </div>
            <div></div>
            <div>
              <h4>San Diego</h4>
              <p>Station: KPRZ 1210AM</p>
              <p>Sundays: 8:30pm</p>
            </div>
            <div></div>
            <div>
              <h4>San Francisco</h4>
              <p>Station: KFAX 1100AM</p>
              <p>Sundays: 8:30pm</p>
            </div>
          </section>
          </Card>
          <Card><h3 style={{color:"brown"}}>Florida</h3>
          <div>
            <h4>Tallahassee</h4>
            <p>Station: WNEE-LP FM 100.3 & FM 107.5</p>
            <p>Daily</p>
          </div>
</Card>
          <Card><h3 style={{color:"brown"}}>Georgia</h3></Card>
          <Card><h3 style={{color:"brown"}}>Indiana</h3></Card>
      
      </div>
      
      </Content>
   

    <Menu
        mode="horizontal"
        style={{ background: 'beige', lineHeight: '48px' }}
      >
        <Menu.Item key="8"><Link href="/todays-broadcast" style={{color:"brown"}}><PlayCircleFilled /> Today's Broadcast</Link></Menu.Item>
        <Menu.Item key="9"><Link href="/links" style={{color:"brown"}}><LinkOutlined /> Other LSM Sites</Link></Menu.Item>
        <Menu.Item key="10" ><Link href="https://www.radiolsm.com/index.html" style={{color:"brown"}}><TranslationOutlined /> Espanol</Link></Menu.Item>
    </Menu>
     <Footer style={{ textAlign: 'center', }}>
      © 1997-2023 Living Stream Ministry. All rights reserved. Reproduction in whole or in part is prohibited.
        </Footer>

    </Layout>
  );
};
export default App;