'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Collapse, Button} from 'antd';

import { HomeOutlined, DownloadOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};

const items = [
  {
    key: '1',
    label: 'Matthew 1:1',
    children: <p><audio preload="none" controls="controls" src="https://www.lsmradio.com/scripture-audio/Matthew1_1.mp3"></audio><br/>“The book of the generation of Jesus Christ, the son of David, the son of Abraham:”<br/>
    ― Matthew 1:1<br/><br/>
    <Link href="https://www.lsmradio.com/audio/mp3-files/Genesis/Gen_001.mp3" download="Gen_001.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link></p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p></p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p></p>,
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