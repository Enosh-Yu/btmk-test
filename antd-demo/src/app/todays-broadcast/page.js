'use client'

import Link from 'next/link'

import { Layout, Menu, theme, Card, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

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

      <div style={{ background: 'beige', padding: 12, minHeight: 90}}>
        <h2>Today's Broadcast</h2>
      </div>

      <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Today's Broadcast</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
        <h2>Saturday, December 16, 2023</h2>
        <Card style={{ background: 'lightgray' }}>Life-Study of Psalms, 26: Christ as the Center of God's Move on the Earth</Card>
        <section>
          <div>
            <h3>Play Today's Broadcast</h3>
            <audio preload="none" controls="controls" id="todays" src="https://www.lsmradio.com/audio/stm-mp3/Psalms/Psalms_26.mp3"></audio>
          </div>
          <div>
            <h3>Subscribe to Today's Podcast</h3>
              <img src="/Generic-RSS-feed-icon.png" width="140" height="35" alt="Add to Existing Podcasting App"/>
              <Link href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cubHNtcmFkaW8uY29tL3Jzcy90b2RheS5yc3M=" rel="nofollow" target="_blank"> <img src="/google-podcast-badge.png" width="140" height="35" alt="Listen on Google Podcasts"/></Link>
          </div>
        </section>
        <p>* Programs may be downloaded for personal use.</p>
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