'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Collapse, Button} from 'antd';

import { HomeOutlined, DownloadOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeaderNew from '../component/btmkheader_new';
import BtmkFooter from '../component/btmkfooter';
import BtmkfootMenu from '../component/btmkfootmenu';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};

const items = [
  {
    key: '1',
    label: 'Matthew 1:1',
    children: <p><section>
      <audio preload="none" controls="controls" src="https://www.lsmradio.com/scripture-audio/Matthew1_1.mp3"></audio>
      <p>
        <Link href="https://www.lsmradio.com/scripture-audio/Matthew1_1.mp3" download="Matthew1_1.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
      </p>
    </section><br/>“The book of the generation of Jesus Christ, the son of David, the son of Abraham:”<br/>
    ― Matthew 1:1
    </p>,
  },
  {
    key: '2',
    label: 'Matthew 1:23',
    children: <p><section>
      <audio preload="none" controls="controls" src="https://www.lsmradio.com/scripture-audio/Matthew1_23.mp3"></audio><p>
        <Link href="https://www.lsmradio.com/scripture-audio/Matthew1_23.mp3" download="Matthew1_23.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
      </p>
    </section>
    <br/>“‘Behold, the virgin shall be with child and shall bear a son, and they shall call His name Emmanuel’ (which is translated, God with us).”<br/>
    ― Matthew 1:23
    </p>,
  },
  {
    key: '3',
    label: 'Matthew 5:48',
    children: <p><section>
      <audio preload="none" controls="controls" src="https://www.lsmradio.com/scripture-audio/Matthew5_48.mp3"></audio><p>
        <Link href="https://www.lsmradio.com/scripture-audio/Matthew5_48.mp3" download="Matthew5_48.mp3"> <Button shape="round" size="small">Download this Program<DownloadOutlined/></Button></Link>
      </p>
    </section>
    <br/>You therefore shall be perfect as your heavenly Father is perfect.<br/>― Matthew 5:48
    </p>,
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">
      
      <BtmkHeaderNew keys="6"/>
      
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
      <BtmkfootMenu />
      <BtmkFooter />      

    </Layout>
  );
};
export default App;