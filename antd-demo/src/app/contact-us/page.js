'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { HomeOutlined, PhoneOutlined, MailOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from './component/btmkheader';
import BtmkFooter from './component/btmkfooter';
import BtmkfootMenu from './component/btmkfootmenu';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">

      <BtmkHeader />

      <div style={{ background: 'beige', minHeight: 30 }}>
        <h2>Contact Us</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <div style={{ padding: 12, minHeight:240}}>
          <h2> LSM Radio Section </h2>
          <p>If you would like more information about this broadcast, please contact Living Stream Ministry:</p>
          <p><PhoneOutlined /> 1-888-LIFE-STUDY or 1-888-543-3788</p>
          <p><MailOutlined /> radio@lsm.org</p>
          <br/>
          <h2> Website Comments or Problems </h2>
          <p>If you have any comments or problems concerning this website, please send email to webmaster@lsm.org.</p>
          

   

      
      
      
      
      
      </div>
      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />
   
    </Layout>
  );
};
export default App;