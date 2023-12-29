'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Tabs, Card, Cascader } from 'antd';

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

import BtmkHeaderNew from '../../component/btmkheader_new';
import BtmkFooter from '../../component/btmkfooter';
import BtmkfootMenu from '../../component/btmkfootmenu';

import { options } from '../../data/dataprogramselect';

const { Header, Content, Footer } = Layout;

const onChangeCas = (value) => {
  value;
};

const onChange = (key) => {
    key;
  };
  const items = [
    {
      key: '1',
      label: <Link href="/programs/old">{'Old Testament'}</Link>,
    },
    {
      key: '2',
      label: 'New Testament',
    },
  ];


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
          <Breadcrumb.Item>Programs</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
      <div style={{ padding: 12, minHeight:240}}>

      <section><p>* Programs may be downloaded for personal use.</p>
      <p>
        <Cascader options={options} onChangeCas={onChangeCas} placeholder="Select a Life-study..." />
      </p>
      </section>
        <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
          <h2> New Testament </h2>
              <Card><h3>Matthew</h3>
              <p>Programs: 75</p>
              <p>Subject: The Gospel of the Kingdom—Proving That Christ Is the King-Savior</p>
              </Card>
              <Card><h3>Mark</h3>
              <p>Programs: 59</p>
              <p>Subject: The Gospel of God—Proving That Jesus Christ Is the Slave-Savior</p>
              </Card>
              <Card><h3>Luke</h3>
              <p>Programs: 65</p>
              <p>Subject: The Gospel of the Forgiveness of Sins—Proving That Jesus Christ is the Man-Savior</p>
              </Card>
              <Card><h3>John</h3>
              <p>Programs: 52</p>
              <p>Subject: The Gospel of Life Proving That Jesus Christ Is God the Savior Coming as Life to Propagate Himself</p>
              </Card>
              <Card><h3>Acts</h3>
              <p>Programs: 72</p>
              <p>Subject: The Propagation of the Resurrected Christ in His Ascension, by the Spirit, through the Disciples, for the Producing of the Churches—The Kingdom of God</p>
              </Card>

      </div>
      
      </Content>

      <BtmkfootMenu />
      <BtmkFooter />
   

    </Layout>
  );
};
export default App;