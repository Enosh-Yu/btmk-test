'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Button, Flex, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined, LeftCircleOutlined, RightCircleOutlined, UnorderedListOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../../../component/btmkheader';
import BtmkFooter from '../../../component/btmkfooter';
import BtmkfootMenu from '../../../component/btmkfootmenu';

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
          <Breadcrumb.Item><Link href="../">Radio Newsletters</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link href="./">"What is ..." Articles</Link></Breadcrumb.Item>
          <Breadcrumb.Item>What is the Life-stydy of the Bible?</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="11" items={items} onChange={onChange} />
        <Flex gap="small" wrap="wrap">
          <Link href="./"><Button><UnorderedListOutlined />Articles</Button></Link>
          <Button disabled="true"><LeftCircleOutlined/>Prev</Button>
          <Button>Next<RightCircleOutlined/></Button>
        </Flex>
          <h2> What is the Life-stydy of the Bible? </h2>
          <Card style={{ display: 'flex', backgroundColor: 'lightgray', color: 'darkblue' }}>
        <p>“In the Bible mainly life is revealed. Life is the focus of the whole Bible. But what is life, or who is life? The answer is in the word of the Lord Jesus. He says, ‘I am life,’ and ‘I am come that you may have life.’ The Bible is a revelation of Christ as life. Whenever we come to the Bible, we must realize that we are coming to contact Christ as our life.” (Life-study of Genesis, Vol.1, Msg.1, p.3)</p>
      </Card>
        <div>
        <p>So begins the Life-study of Genesis by Witness Lee. On April 6, 1974, our Lord, through one of His chosen vessels, initiated one of the truly remarkable undertakings in the history of the church—a book-by-book study of the entire Bible with the focus on life. Many have written commentaries, expositions, and studies on various books of the Bible. However, most have touched only the objective and doctrinal side of the divine revelation and have failed to stress the side of life. Because of this, Witness Lee became burdened by the Lord to prepare this life-study of the Bible.</p>

        <p>The Life-study of the Bible is a detailed study which, while honoring the contributions of our forebears, builds upon and develops all that the Lord has revealed to His church throughout the centuries. The emphasis on unveiling and ministering Christ as life is what distinguishes The Life-study of the Bible from other commentaries or expositions.</p>

        <p>The Life-study of the Bible, consisting of thirty-four volumes, capped the life and work of Witness Lee. He was nearly seventy years old when he began this task. At its conclusion twenty-one years later, he reflected upon the previous years in humility and appreciation to the Lord for granting him the time to carry out this burden. In so doing, he fulfilled not only his own dream but that of Watchman Nee, with whom he labored in China. As he finished the last book of his study, the Song of Songs, in July 1995, he testified that he could rest now because he had fulfilled the wish and desire of his senior co-worker, Watchman Nee, to conduct such a study of the Bible. Witness Lee went to be with the Lord on June 9, 1997, at the age of ninety-one.</p>

        <p>From Issue No. 1, May 1998</p> 
        </div>
      <Divider /></div>
      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />
      
    </Layout>
  );
};
export default App;