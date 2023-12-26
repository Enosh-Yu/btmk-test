'use client'

import Link from 'next/link'

import { Layout, Menu, theme, Card, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../component/btmkheader';
import BtmkFooter from '../component/btmkfooter';
import BtmkfootMenu from '../component/btmkfootmenu';

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">

    <BtmkHeader />

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
      <BtmkfootMenu />
      <BtmkFooter />
    </Layout>
  );
};
export default App;