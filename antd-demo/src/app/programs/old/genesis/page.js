'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader, Button, Flex, Collapse } from 'antd';

import { DownloadOutlined, HomeOutlined, LeftCircleOutlined, RightCircleOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeaderNew from '../../../component/btmkheader_new';
import BtmkFooter from '../../../component/btmkfooter';
import BtmkfootMenu from '../../../component/btmkfootmenu';

import { options } from '../../../data/dataprogramselect';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: '1',
    label: 'The General Sketch and Central Thought (1)',
    children: <p>
      <section><audio preload="none" controls="controls" src="https://www.lsmradio.com/audio/stm-mp3/Genesis/Gen_001.mp3"></audio> 
    <p>
      <Link href="https://www.lsmradio.com/audio/mp3-files/Genesis/Gen_001.mp3" download="Gen_001.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
    </p></section><br/>
    Title: The General Sketch and Central Thought (1)<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 1
    </p>,
  },
  {
    key: '2',
    label: 'The General Sketch and Central Thought (2)',
    children: <p>
      <section><audio preload="none" controls="controls" src="https://www.lsmradio.com/audio/stm-mp3/Genesis/Gen_002.mp3"></audio> 
    <p>
      <Link href="https://www.lsmradio.com/audio/mp3-files/Genesis/Gen_002.mp3" download="Gen_002.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
    </p></section><br/>
    Title: The General Sketch and Central Thought (2)<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 2
    </p>,
  },
  {
    key: '3',
    label: "Satan's Rebellion and Corruption",
    children: <p>
      <section><audio preload="none" controls="controls" src="https://www.lsmradio.com/audio/stm-mp3/Genesis/Gen_003.mp3"></audio> 
    <p>
      <Link href="https://www.lsmradio.com/audio/mp3-files/Genesis/Gen_003.mp3" download="Gen_003.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
    </p></section><br/>
    Title: Satan's Rebellion and Corruption<br/>
    Scripture: varied<br/>
    Speaker: WL/RK<br/>
    Life-study: Message 3
    </p>,
  },
];

// const options = [
//   {
//     value: 'Old Testament',
//     label: 'Old Testament',
//   },
//   {
//     value: 'Genesis',
//     label: <Link href="/programs/old/genesis">{'Genesis'}</Link>,
//   },
//   {
//     value: 'Exodus',
//     label: <Link href="/programs/old/exodus">{'Exodus'}</Link>,
//   },
// ];

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

      <BtmkHeaderNew keys="2" />

      <div style={{ background: 'beige', minHeight: 30 }}>
        <h2>Radio Programs</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link href="/programs">Programs</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Genesis</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <div style={{ padding: 12, minHeight:240}}>

      <p>Life-study of the Bible with Witness Lee is a 30-minute radio broadcast composed of excerpts from Witness Lee's spoken ministry that focuses on the enjoyment of the divine life as revealed in the Scriptures. The ministry portions are followed by a discussion of the portion presented, including questions and answers.</p>
        <section>
          <Flex gap="small" wrap="wrap">
            <Button disabled="true"><LeftCircleOutlined/>Prev</Button>
            <Link href="./exodus"><Button>Next<RightCircleOutlined/></Button></Link>
          </Flex>
          <Cascader options={options} onChangeCas={onChangeCas} placeholder="Select a Life-study..." />
        </section>
          <h2> Genesis (134) </h2>
          <p>Subject: God Created, Satan Corrupted, Man Fell, and Jehovah Promised to Save</p>
          <Collapse items={items} onChange={onChange} />

      </div>
      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />
             </Layout>
  );
};
export default App;