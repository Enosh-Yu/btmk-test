'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../../component/btmkheader';
import BtmkFooter from '../../component/btmkfooter';
import BtmkfootMenu from '../../component/btmkfootmenu';

import { items } from '../../data/datanewsletters'

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">

      <BtmkHeader keys="5" />

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
          <Breadcrumb.Item>2005</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="3" items={items} onChange={onChange} />
          <h2> 2005 </h2>
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
            <h3>April-June <FilePdfOutlined /></h3>
          </Card>
          <Card>
          <h3>July-September <FilePdfOutlined /></h3>
          </Card>
 
      <Divider /></div>
      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />
      
    </Layout>
  );
};
export default App;