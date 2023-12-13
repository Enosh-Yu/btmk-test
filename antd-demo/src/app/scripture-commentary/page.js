'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

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
        defaultSelectedKeys={['6']}
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
        <h2>Scripture & Commentary</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Scripture & Commentary</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12, minHeight:240}}>
          <h2> A One-minute Scripture Reading with Commentary </h2>
            <section><div><p>The Recovery Version of the New Testament contains extensive footnotes stressing the revelation of the truth, light, and life found in the Scriptures. This nourishing content is presented in Scripture & Commentary.<br/>
      Living Stream Ministry, publisher of Watchman Nee and Witness Lee, is pleased to make Scripture & Commentary available in one-minute portions free to radio stations. For more information, send email to radio@lsm.org or call toll free 1-888-543-3788.</p>
      <p>(Also available in Spanish )</p></div>
      <p><img src="sc-image.jpg" width="180" height="90"/></p></section>

      <Divider />
      <h2>One-Minute Scripture Readings</h2>
      <p>Listen and download the one-minute portions below or download all portions here.</p>

      <p>* Programs may be downloaded for personal use.</p>

      
      
      
      
      
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