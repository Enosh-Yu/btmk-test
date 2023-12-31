'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader } from 'antd';

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

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
    <Header>
      <div className="menu" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
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
              <Card>
                <section>
                  <Link href="/programs/old/genesis"><h3>Genesis</h3></Link>
              <div>
                <p>
                <img src="/Generic-RSS-feed-icon.png" alt="Add to Existing Podcasting App" width="140" height="35" />
                <Link href="https://itunes.apple.com/us/podcast/life-study-of-genesis-with-witness-lee/id1281058100" target="_blank"> <img src="/Apple-Podcast-badge.png" width="140" height="35" alt="Listen on Apple Podcasts"/></Link>
                <Link href="https://www.google.com/podcasts?feed=aHR0cHM6Ly93d3cubHNtcmFkaW8uY29tL3Jzcy9HZW5lc2lzLnJzcw%3D%3D" rel="nofollow" target="_blank"> <img src="/google-podcast-badge.png" width="140" height="35" alt="Listen on Google Podcasts"/></Link>
                </p>
              </div>
              </section>
              <p>Programs: 134</p>
              <p>Subject: God Created, Satan Corrupted, Man Fell, and Jehovah Promised to Save</p>
              </Card>
              <Card>
              <section>
                <Link href="/programs/old/exodus"><h3>Exodus</h3></Link>
              <div>
                <p>
                <img src="/Generic-RSS-feed-icon.png" alt="Add to Existing Podcasting App" width="140" height="35" />
                <Link href="https://itunes.apple.com/us/podcast/life-study-of-exodus-with-witness-lee/id1281058606" target="_blank"> <img src="/Apple-Podcast-badge.png" width="140" height="35" alt="Listen on Apple Podcasts"/></Link>
                <Link href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cubHNtcmFkaW8uY29tL3Jzcy9FeG9kdXMucnNz" rel="nofollow" target="_blank"> <img src="/google-podcast-badge.png" width="140" height="35" alt="Listen on Google Podcasts"/></Link>
                </p>
              </div>
              </section>
              <p>Programs: 175</p>
              <p>Subject: Christ Is the Redemption, Salvation, and Supply of God's People and the Means for Them to Worship and Serve God So That in Him They May Be Built Up with God Together for Them and God to Meet, Communicate, and Dwell Mutually</p>
              </Card>
              <Card><h3>Leviticus</h3>
              <p>Programs: 40</p>
              <p>Subject: Christ Is Everything in the Fellowship, Service, and Life of God's Redeemed</p>
              </Card>
              <Card><h3>Numbers</h3>
              <p>Programs: 32</p>
              <p>Subject: Christ Is the Meaning of Life, the Testimony, the Center of God's People, and the Leader, the Way, and the Goal of Their Journey and Fighting</p>
              </Card>
              <Card><h3>Deuteronomy</h3>
              <p>Programs: 25</p>
              <p>Subject: Christ Is the Instructor and Leader of the People of God That They May Be Able to Enter into the Heavenly Territory and Participate in His Riches</p> 
              </Card>

      </div>
      
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