'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader, Button, Flex, Collapse } from 'antd';

import { HomeOutlined, LeftCircleOutlined, RightCircleOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined, DownloadOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: '1',
    label: 'An Introductory Word',
    children: <p>
    <section><audio preload="none" controls="controls" src="https://www.lsmradio.com/audio/stm-mp3/Exodus/Exo_001.mp3"></audio> 
    <p>
      <Link href="https://www.lsmradio.com/audio/mp3-files/Exodus/Exo_001.mp3" download="Exo_001.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
    </p></section><br/>
    Title: An Introductory Word<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 1</p>,
  },
  {
    key: '2',
    label: 'Israel Under Slavery',
    children: <p>
      <section><audio preload="none" controls="controls" src="https://www.lsmradio.com/audio/stm-mp3/Exodus/Exo_002.mp3"></audio> 
    <p>
      <Link href="https://www.lsmradio.com/audio/mp3-files/Exodus/Exo_002.mp3" download="Exo_002.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
    </p></section><br/>
    Title: An Introductory Word<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 2</p>,  },
  {
    key: '3',
    label: 'Preparation of the Slave Savior',
    children: <p>
    <section><audio preload="none" controls="controls" src="https://www.lsmradio.com/audio/stm-mp3/Exodus/Exo_003.mp3"></audio> 
    <p>
      <Link href="https://www.lsmradio.com/audio/mp3-files/Exodus/Exo_003.mp3" download="Exo_003.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
    </p></section><br/>
    Title: An Introductory Word<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 3</p>,  },
];

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
          <Breadcrumb.Item><Link href="/programs">Programs</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Exodus</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <div style={{ padding: 12, minHeight:240}}>

      <p>Life-study of the Bible with Witness Lee is a 30-minute radio broadcast composed of excerpts from Witness Lee's spoken ministry that focuses on the enjoyment of the divine life as revealed in the Scriptures. The ministry portions are followed by a discussion of the portion presented, including questions and answers.</p>
        <section>
          <Flex gap="small" wrap="wrap">
            <Link href="./genesis"><Button><LeftCircleOutlined/>Prev</Button></Link>
            <Link href="./exodus"><Button>Next<RightCircleOutlined/></Button></Link>
          </Flex>
          <Cascader options={options} onChangeCas={onChangeCas} placeholder="Select a Life-study..." />
        </section>
          <h2> Exodus (175) </h2>
          <p>Subject: Christ Is the Redemption, Salvation, and Supply of God's People and the Means for Them to Worship and Serve God So That in Him They May Be Built Up with God Together for Them and God to Meet, Communicate, and Dwell Mutually</p>
          <Collapse items={items} onChange={onChange} />

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