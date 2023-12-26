'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from './component/btmkheader';
import BtmkFooter from './component/btmkfooter';
import BtmkfootMenu from './component/btmkfootmenu';

const { Header, Content, Footer } = Layout;

const onChange = (key) => {
  key;
};
const items = [
  {
    key: '1',
    label: <Link href="/newsletters">{'Newsletters:'}</Link>,
  },
    {
    key: '2',
    label: <Link href="/newsletters/2006-2007">{'2006-2007'}</Link>,
  },
  {
    key: '3',
    label: <Link href="/newsletters/2005">{'2005'}</Link>,
  },
  {
    key: '4',
    label: <Link href="/newsletters/2004">{'2004'}</Link>,
  },
  {
    key: '5',
    label: <Link href="/newsletters/2003">{'2003'}</Link>,
  },
  {
    key: '6',
    label: <Link href="/newsletters/2002">{'2002'}</Link>,
  },
  {
    key: '7',
    label: <Link href="/newsletters/2001">{'2001'}</Link>,
  },
  {
    key: '8',
    label: <Link href="/newsletters/2000">{'2000'}</Link>,
  },
  {
    key: '9',
    label: <Link href="/newsletters/1999">{'1999'}</Link>,
  },
  {
    key: '10',
    label: <Link href="/newsletters/1998">{'1998'}</Link>,
  },
  {
    key: '11',
    label: <Link href="/newsletters/whatis">{'"What is..." Articles'}</Link>,
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
   return (
    <Layout className="layout">

      <BtmkHeader />

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