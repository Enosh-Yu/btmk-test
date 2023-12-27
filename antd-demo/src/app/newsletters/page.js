'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../component/btmkheader';
import BtmkFooter from '../component/btmkfooter';
import BtmkfootMenu from '../component/btmkfootmenu';

import { items } from '../data/datanewsletters'

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">

      <BtmkHeader keys="5" />

      <div style={{ background: 'beige', }}>
        <h2>Radio Newsletters</h2>
        <p>The Hearing of Faith</p></div>
        <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Radio Newsletters</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Divider /></div>
      <section><div>
        <Card style={{ display: 'flex', backgroundColor: 'lightgray', color: 'darkblue' }}>
        <p>“He therefore who bountifully supplies to you the Spirit...does he do it out of the works of law or out of the hearing of faith?”</p>
        <p style={{textAlign: 'right'}}>Galatians 3:5</p>
      </Card>
        <p>The Hearing of Faith is a free radio newsletter of Living Stream Ministry that features portions of the ministry of Watchman Nee and Witness Lee, helpful articles concerning crucial items related to scriptural truth and Christian experience and comments from our listeners.</p>

        <p>Back issues of this publication are available online, dating from our first issue in May 1998 until March 2007. Each newsletter is four pages long and can be read online or downloaded.</p>

        <p>If you have any questions or comments please send them to radio@lsm.org.</p>
        </div>
        <div><img src="hearing-of-faith.png" width="200" height="200"/></div>      
        </section>
   

   

      
      
      
      
      

      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />

    </Layout>
  );
};
export default App;