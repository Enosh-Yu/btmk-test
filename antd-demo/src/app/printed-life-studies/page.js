'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider } from 'antd';

import { HomeOutlined, BookOutlined, TabletOutlined, DesktopOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../component/btmkheader';
import BtmkFooter from '../component/btmkfooter';
import BtmkfootMenu from '../component/btmkfootmenu';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">

      <BtmkHeader />

      <div style={{ background: 'beige', minHeight: 30 }}>
        <h2>Printed Life-studies</h2></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Printed Life-studies</Breadcrumb.Item>
        </Breadcrumb>     

    <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
      <section><p><h2> About Life-study of the Bible </h2>
            Life-study of the Bible, a monumental and classic work by Witness Lee, builds upon and is a further development of all that the Lord has revealed to His church in the past centuries. It is filled with the revelation concerning the processed Triune God, the living Christ, the life-giving Spirit, the experience of life, and the definition and practice of the church.<br/><br/>
            Also see <Link href="/newsletters/whatis/what-is-life-study-of-the-bible">"What is the Life-study of the Bible?"</Link>.</p>
      <p><img src="life-study-hardbounds.png" width="260" height="170"/></p></section>
      <h2> Ways to Read the Life-study Messages </h2>
        <h3><BookOutlined /> Print Editions</h3>
        <p>To order print editions online, create a free account at <Link href="https://www.livingstream.com">www.livingstream.com</Link>. Life-studies are located under Books <Link href="https://www.livingstream.com/en/36-life-study-of-the-bible">Life-study of the Bible</Link> and are available in English and Spanish.
        </p>
        <Divider />
        <h3><TabletOutlined /> eBooks and Audiobooks</h3>
        <p>        
          Living Stream Ministry is actively working to produce electronic editions of the ministry of Watchman Nee and Witness Lee for a variety of platforms. These <Link href="https://www.lsm.org/epublications.html">ebooks</Link> consist of the full content of the print editions including page numbers that correspond with the printed text. Life-studies are also being produced as <Link href="https://www.lsm.org/audiobooks/">Audiobooks</Link>.
        </p>
        <Divider />

        <h3><DesktopOutlined /> Read Online</h3>
        <p>
          Living Stream Ministry is pleased to provide the complete text of many of its <Link href="https://www.lsm.org/audiobooks/">ministry publications online</Link>. We sincerely hope that the riches of Christ could be broadly sown throughout the earth through this channel for the benefit of all the Lord's children.
        </p>
      </div>

    </Content>

    <BtmkfootMenu />
    <BtmkFooter />   

    </Layout>
  );
};
export default App;