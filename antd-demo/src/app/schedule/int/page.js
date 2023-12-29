'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card } from 'antd';

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeaderNew from '../../component/btmkheader_new';
import BtmkFooter from '../../component/btmkfooter';
import BtmkfootMenu from '../../component/btmkfootmenu';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};
const items = [
  {
    key: '1',
  label: <Link href="/schedule">{'United States'}</Link>,
  },
  {
    key: '2',
    label: 'International',
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">

    <BtmkHeaderNew keys="4" />

      <div style={{ background: 'beige', minHeight: 30 }}>
        <h2>Broadcast Schedule</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Broadcast Schedule: International</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white' }}>
      <div style={{ padding: 12 }}>
        <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
          <h2> International </h2>
          <Card><h3>Antigua</h3></Card>
          <Card><h3>Australia</h3></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>  
      
      </div>
      
      </Content>
   
      <BtmkfootMenu />
      <BtmkFooter />

    </Layout>
  );
};
export default App;