'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader, Button, Flex, Collapse } from 'antd';

import { HomeOutlined, LeftCircleOutlined, RightCircleOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined, DownloadOutlined } from '@ant-design/icons';

import BtmkHeader from '../../../component/btmkheader';
import BtmkFooter from '../../../component/btmkfooter';
import BtmkfootMenu from '../../../component/btmkfootmenu';

import { options } from '../../../data/dataprogramselect';

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

      <BtmkHeader keys="2" />

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

      <BtmkfootMenu />
      <BtmkFooter />
      
      </Layout>
  );
};
export default App;