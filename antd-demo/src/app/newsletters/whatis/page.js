'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider, Tabs, Card } from 'antd';

import { HomeOutlined, FilePdfOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeader from '../../component/btmkheader';
import BtmkFooter from '../../component/btmkfooter';
import BtmkfootMenu from '../../component/btmkfootmenu';

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
          <Breadcrumb.Item><Link href="/newsletters">Radio Newsletters</Link></Breadcrumb.Item>
          <Breadcrumb.Item>"What is ..." Articles</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ padding: '0 0px', background: 'white'}}>
      <div style={{ padding: 12}}>
        <Tabs defaultActiveKey="11" items={items} onChange={onChange} />
          <h2> "What is ..." Articles </h2>
          <ul>
            <li><Link href="./whatis/what-is-life-study-of-the-bible">What is the Life-study of the Bible?</Link></li>
            <li>What is the Lord's Recovery?</li>
            <li>What is God's Thought concerning Reward and Punishment?</li>
            <li>What is the Recovery Version?</li>
            <li>What is God's Economy?</li>
            <li>What is God's Purpose?</li>
            <li>What is the Crucified Life?</li>
            <li>What is the New Jerusalem?</li>
            <li>What is Baptism?</li>
            <li>What is the Testimony of the Scriptures concerning God as Our Food?</li>
            <li>What is the Divine Romance?</li>
            <li>What is God's Full Salvation?</li>
            <li>What is Grace?</li>
            <li>What is Transformation?</li>
            <li>What is the Church?</li>
            <li>What is the All-inclusive Christ?</li>
            <li>What is the New Covenant?</li>
            <li>What is the Kingdom?</li>
            <li>What is the Seed of the Kingdom?</li>
            <li>What is the Rapture of the Overcomers?</li>
            <li>What is the Significance of the Golden Lampstands?</li>
            <li>What is an Overcomer?</li>
            <li>What is the Ultimate Destiny of the Believers?</li>
            <li>What is the Captivity of God's People in Babylon?</li>
            <li>What is the All-inclusive Spirit of Jesus Christ?</li>
            <li>What Does it Mean to Work Out Our Own Salvation?</li>
            <li>What is the Meaning of Holding Forth the Word of Life?</li>
            <li>What is a Type in the Bible?</li>
            <li>What is a Holy Life?</li>
            <li>What is the Priestly Service?</li>
            <li>What is the Process of God's Economy?</li>
            <li>What is the New Man?</li>
            <li>What is Faith?</li>
            <li>What is the Flesh?</li>
            <li>What is the Significance of Incarnation?</li>
            <li>What is the Significance of Christ's Glorification?</li>
            <li>What is the All-inclusive Death of Christ?</li>
            <li>What is the Significance of Christ's Resurrection?</li>
            <li>What is the Significance of the Good Land?</li>
            <li>What is God's Blessing?</li>
            <li>What is the Human Spirit?</li>
            <li>What is the Body of Christ?</li>
            <li>What is the Bride of Christ?</li>
            <li>What is the Renewing of the Mind?</li>
            <li>What is the Significance of the Birthright?</li>
            <li>What is the Eternal Life?</li>
            <li>What is a Spiritual Gift?</li>
            <li>What is the Life-giving Spirit?</li>
            <li>What is Material Giving?</li>
            <li>What is the Ministry of the New Covenant?</li>
            <li>What is a Minister of the New Covenant?</li>
            <li>What is the Dispensing of the Triune God?</li>
            <li>What is to Eat God's Word?</li>
            <li>What is the Enjoyment of Christ?</li>
            <li>What is the House of God?</li>
            <li>What is the Believers' Organic Union with Christ?</li>
            <li>What is Sanctification?</li>
            <li>What is the Mingling of God and Man?</li>
            <li>What is the Self?</li>
            <li>What is it to Exercise Our Spirit?</li>
            <li>What is Calling on the Lord?</li>
            <li>What is Pray-reading the Word?</li>
            <li>What is the Old Man?</li>
            <li>What is the Ministry?</li>
            <li>What is the Jubilee?</li>
            <li>What is the Path of Life?</li>
            <li>What is Zion, in the Psalms?</li>
            <li>What is the Second Garment?</li>
            <li>What is the Healing of Blindness in the Gospel of Mark?</li>
            <li>What is it to Take Christ as the Sin Offering?</li>
            <li>What is a Loving Heart and a Receiving Spirit?</li>
          </ul>
 
      <Divider /></div>
      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />
      
    </Layout>
  );
};
export default App;