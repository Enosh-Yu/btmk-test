'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader } from 'antd';

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from './component/btmkheader';
import BtmkFooter from './component/btmkfooter';
import BtmkfootMenu from './component/btmkfootmenu';

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
      
      <BtmkHeader />

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
      <p>
        <Cascader options={options} onChangeCas={onChangeCas} placeholder="Select a Life-study..." />
      </p>
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
      
      <BtmkfootMenu />
      <BtmkFooter />

    </Layout>
  );
};
export default App;