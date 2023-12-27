'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card } from 'antd';

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../component/btmkheader';
import BtmkFooter from '../component/btmkfooter';
import BtmkfootMenu from '../component/btmkfootmenu';

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

    <BtmkHeader keys="4" />

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
      
      <BtmkfootMenu />
      <BtmkFooter />

    </Layout>
  );
};
export default App;