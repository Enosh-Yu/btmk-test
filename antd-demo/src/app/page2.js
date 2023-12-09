'use client'

import React from 'react'
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout" >
          <div class='logo' style={{ background: 'white', padding: 12}}>
            <img src="/logo-only.gif" width="64" height="64" />
                Living Stream Ministry<br />Life-study of the Bible Radio Broadcast</div>
    <Header >
      <div className="menu" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Programs</Menu.Item>
        <Menu.Item key="3">Printed Life-studies</Menu.Item>
        <Menu.Item key="4">Schedule</Menu.Item>
        <Menu.Item key="5">Newsletters</Menu.Item>
        <Menu.Item key="6">Scruotyre & Cinnebtary</Menu.Item>
        <Menu.Item key="7">Contact Us</Menu.Item>

      </Menu>
    </Header>
    <Content style={{ padding: '0 0px' }}>
      <div style={{ background: 'beige', padding: 12, minHeight: 90, textAlign: 'right'}}>
        <h2>Life-study of the Bible<br></br>
        with Witness Lee<br></br>
        A 30-minute Radio Broadcast<br></br>
        Composed of Excerpts from Witness Lee's Spoken Ministry</h2></div>
    </Content>
    <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ background: 'white', align: 'center'}}
        >
        <Menu.Item key="11"><img src="/listen.png" /><br/>Listen to Programs</Menu.Item>
        <Menu.Item key="12"><img src="/read.png" /><br/>Read Life-Studies</Menu.Item>
        <Menu.Item key="13"><img src="/broadcast.png" /><br/>Get Today's Broadcast</Menu.Item>
        </Menu>
    <Content style={{ padding: '0 0px' }}>
    <div style={{ background: 'white', padding: 12, minWidth: 240, float: 'left'}}>
        About Life-study of the Bible with Witness Lee<br/>
Life-study of the Bible with Witness Lee is a 30-minute radio broadcast composed of excerpts from Witness Lee's spoken ministry that focuses on the enjoyment of the divine life as revealed in the Scriptures. The ministry portions are followed by a discussion of the portion presented, including questions and answers.<br/>

Radio broadcasts of Life-study of the Bible with Witness Lee began in the United States in September 1996. It is now heard in three languages on more than 100 stations worldwide.</div>

<div style={{ background: 'white', padding: 12, minWidth: 240, float: 'left'}}>
Watchman Nee and Witness Lee<br/>
The ministry of Watchman Nee has been nourishing and edifying seeking believers throughout the earth for over 70 years. In 1962, Witness Lee, a close co-worker of Watchman Nee in China brought this ministry to the United States, where he continued to minister the riches of God's Word until he went to be with the Lord in 1997.</div>
    </Content>
    <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ background: 'beige', lineHeight: '48px' }}
      >
        <Menu.Item key="8">Today's Broadcast</Menu.Item>
        <Menu.Item key="9">Other LSM Sites</Menu.Item>
        <Menu.Item key="10">Espanol</Menu.Item>
    </Menu>
    <Footer style={{ textAlign: 'center' }}>
        <div>© 1997-2023 Living Stream Ministry. All rights reserved. Reproduction in whole or in part is prohibited.</div>
    </Footer>
  </Layout>
);
  };
export default HomePage;