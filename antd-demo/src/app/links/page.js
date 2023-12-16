'use client'

import Link from 'next/link'

import { Layout, Menu, theme, Card, Breadcrumb, List } from 'antd';

const { Header, Content, Footer } = Layout;

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

const data = [
  {
    href: 'http://www.lsm.org',
    title: <p style={{color:'brown'}}>About LSM — www.lsm.org</p>,
    description: "Living Stream Ministry is a non-profit corporation that is primarily dedicated to the publication of the ministry of Watchman Nee and Witness Lee. Living Stream Ministry has one goal: to supply spiritual food for the nourishment of all believers that they may grow in the divine life for the sake of the building up of the Body of Christ."
  },
  {
    href: 'http://www.livingstream.com',
    title: <p style={{color:'brown'}}>Books — www.livingstream.com</p>,
    description: "Living Stream Ministry publishes the works of Watchman Nee and Witness Lee, providing the authoritative and definitive collections of treasures from these two servants of the Lord Jesus Christ. Their writings focus on the enjoyment of the divine life, which all the believers possess, and on the building up of the church, the goal of God's work with man in this age."
  },
  {
    href: 'http://www.recoveryversion.org',
    title: <p style={{color:'brown'}}>The Recovery Version of the Bible — www.recoveryversion.org</p>,
    description: "The Recovery Version of the Bible contains numerous study aids, including, the subject and background of each book; detailed, interpretive outlines; enlightening footnotes, valuable cross-references, and a variety of useful charts and maps."
  },
  {
    href: 'http://www.ministrybooks.org',
    title: <p style={{color:'brown'}}>Online Publications — www.ministrybooks.org</p>,
    description: "Living Stream Ministry provides the complete text of many of its ministry publications online in the hope that the riches of Christ can be broadly sown throughout the earth for the benefit of all the Lord's children."
  },
  {
    href: 'http://www.affcrit.com',
    title: <p style={{color:'brown'}}>Affirmation & Critique — www.affcrit.com</p>,  
    description: "Affirmation & Critique addresses crucial aspects of Christian thought and practice in light of a vital, yet neglected, aspect of the Bible—the oikonomia of God (Eph. 3:9). The essential and profound truths of the Bible, which involve God's dispensing of Himself and all that He has into man, are affirmed, and many traditional teachings are responsibly critiqued in light of this economy."
  },
  {
    href: 'http://www.emanna.com',
    title: <p style={{color:'brown'}}>eManna — www.emanna.com</p>,  
    description: "eManna delivers the Word of God as the bread of life daily via email. With a few verses from the Bible and a short word of ministry, eManna will nourish and strengthen your faith. This service is free."
  },
  {
    href: 'http://www.lsmwebcast.com',
    title: <p style={{color:'brown'}}>Webcast Subscription Service — www.lsmwebcast.com</p>,
    description: "Living Stream Ministry provides a subscription webcast service that enables subscribers to access the video content of recent conferences and also selected conferences and video trainings by Witness Lee."
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

      <div style={{ background: 'beige', padding: 12, minHeight: 90}}>
        <h2>Other LSM Websites</h2>
      </div>

      <Breadcrumb
          style={{
            margin: '8px 8px',
          }}
        >
          <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Other LSM Websites</Breadcrumb.Item>
        </Breadcrumb>     

      <Content  style={{ background: 'white', padding: '0 0px', }}>
        <h2>Links to Other Living Stream Ministry Websites</h2>

        <List
          itemLayout="vertical"
          size='small'
          pagination={{
          onChange: (page) => {
          page;
      },
      pageSize: 7,
    }}
    dataSource={data}
    
    renderItem={(item) => (
      <List.Item key={item.title}>
        <List.Item.Meta
          title={<Link href={item.href}>{item.title}</Link>}
          description={item.description}
        />
      </List.Item>
    )}
  />
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