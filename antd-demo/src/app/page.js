'use client'

import Link from 'next/link'

import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from './component/btmkheader';
import BtmkFooter from './component/btmkfooter';
import BtmkfootMenu from './component/btmkfootmenu';

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">

      {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      > */}
        {/* <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(7).fill(null).map((_, index) => {
            const key = index + 1;
            const Topmenu = ['Home', 'Programs', 'Printed Life-studies', 'Schedule', 'Newsletters', 'Scripture & Commentary', 'Contact Us'];
            return {
              key,
              label: Topmenu[key-1],       
            };
          })}
        />
        <div className="menu" /> */}

    {/* <Header>
      <div className="menu" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
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
    </Header> */}

    <BtmkHeader />

      <div style={{ background: 'beige', padding: 12, minHeight: 90, textAlign: 'right'}}>
        <h2>Life-study of the Bible<br></br>
        with Witness Lee<br></br>
        A 30-minute Radio Broadcast<br></br>
        Composed of Excerpts from Witness Lee's Spoken Ministry</h2></div>

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <Menu
        mode="horizontal"
        style={{ background: 'white',}}
        >
        <Menu.Item key="11"><Link href="/programs"><img src="/listen.png" /><br/>Listen to Programs</Link></Menu.Item>
        <Menu.Item key="12"><Link href="/printed-life-studies"><img src="/read.png" /><br/>Read Life-Studies</Link></Menu.Item>
        <Menu.Item key="13"><Link href="/todays-broadcast"><img src="/broadcast.png" /><br/>Get Today's Broadcast</Link></Menu.Item>
        </Menu>

    <div style={{ padding: 12, minHeight:240}}>
       <section><p> About Life-study of the Bible with Witness Lee<br/>
Life-study of the Bible with Witness Lee is a 30-minute radio broadcast composed of excerpts from Witness Lee's spoken ministry that focuses on the enjoyment of the divine life as revealed in the Scriptures. The ministry portions are followed by a discussion of the portion presented, including questions and answers.</p>

<p>Watchman Nee and Witness Lee<br/>
The ministry of <Link href="https://www.watchmannee.org/">Watchman Nee</Link> has been nourishing and edifying seeking believers throughout the earth for over 70 years. In 1962, <Link href="https://www.witnesslee.org/">Witness Lee</Link>, a close co-worker of Watchman Nee in China brought this ministry to the United States, where he continued to minister the riches of God's Word until he went to be with the Lord in 1997.</p></section>

<section><p><Link href="/programs">Radio broadcasts</Link> of Life-study of the Bible with Witness Lee began in the United States in September 1996. It is now heard in three languages on more than <Link href="/schedule">100 stations worldwide</Link>.</p>
<p>  </p></section>
</div>
    </Content>
    {/* <Menu
        mode="horizontal"
        style={{ background: 'beige', lineHeight: '48px' }}
      >
        <Menu.Item key="8"><Link href="/todays-broadcast" style={{color:"brown"}}><PlayCircleFilled /> Today's Broadcast</Link></Menu.Item>
        <Menu.Item key="9"><Link href="/links" style={{color:"brown"}}><LinkOutlined /> Other LSM Sites</Link></Menu.Item>
        <Menu.Item key="10" ><Link href="https://www.radiolsm.com/index.html" style={{color:"brown"}}><TranslationOutlined /> Espanol</Link></Menu.Item>
    </Menu>
      <Footer style={{ textAlign: 'center', }}>
      © 1997-2023 Living Stream Ministry. All rights reserved. Reproduction in whole or in part is prohibited.
      </Footer> */}
      <BtmkfootMenu />
      <BtmkFooter />
    </Layout>
  );
};
export default App;