'use client'
import Link from 'next/link'

import { Breadcrumb, Layout, Menu, theme, Divider } from 'antd';

import { HomeOutlined, BookOutlined, TabletOutlined, DesktopOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

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
        defaultSelectedKeys={['3']}
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
            Also see "What is the Life-study of the Bible?".</p>
      <p><img src="life-study-hardbounds.png" width="260" height="170"/></p></section>
      <h2> Ways to Read the Life-study Messages </h2>
        <h3><BookOutlined /> Print Editions</h3>
        <p>To order print editions online, create a free account at www.livingstream.com. Life-studies are located under Books Life-study of the Bible and are available in English and Spanish.
        </p>
        <Divider />
        <h3><TabletOutlined /> eBooks and Audiobooks</h3>
        <p>        
          Living Stream Ministry is actively working to produce electronic editions of the ministry of Watchman Nee and Witness Lee for a variety of platforms. These ebooks consist of the full content of the print editions including page numbers that correspond with the printed text. Life-studies are also being produced as Audiobooks.
        </p>
        <Divider />

        <h3><DesktopOutlined /> Read Online</h3>
        <p>
          Living Stream Ministry is pleased to provide the complete text of many of its ministry publications online. We sincerely hope that the riches of Christ could be broadly sown throughout the earth through this channel for the benefit of all the Lord's children.
        </p>
      </div>

    </Content>
      
   
    <Menu
        mode="horizontal"
        style={{ background: 'beige', lineHeight: '48px' }}
      >
        <Menu.Item key="8">Today's Broadcast</Menu.Item>
        <Menu.Item key="9">Other LSM Sites</Menu.Item>
        <Menu.Item key="10">Espanol</Menu.Item>
    </Menu>
     <Footer style={{ textAlign: 'center', }}>
      © 1997-2023 Living Stream Ministry. All rights reserved. Reproduction in whole or in part is prohibited.
        </Footer>

    </Layout>
  );
};
export default App;