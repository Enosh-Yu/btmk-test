'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeaderNew from '../../component/btmkheader_new';
import BtmkFooter from '../../component/btmkfooter';
import BtmkfootMenu from '../../component/btmkfootmenu';

import { items } from '../../data/datanewsletters'

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

      <BtmkHeaderNew keys="5" />

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
          <Breadcrumb.Item>2000</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="8" items={items} onChange={onChange} />
          <h2> 2000 </h2>
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

      <BtmkfootMenu />
      <BtmkFooter />
      
    </Layout>
  );
};
export default App;