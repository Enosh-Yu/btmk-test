import Link from 'next/link'

import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';

export default function BtmkHeaderNew ({keys}) { 
    return (

    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
    <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys = {[keys]}
          items={new Array(7).fill(null).map((_, index) => {
            const key = index + 1;
            const Topmenulink = ['home', 'programs', 'printed-life-studies', 'schedule', 'newsletters', 'scripture-commentary', 'contact-us'];
            const Topmenu = ['Home', 'Programs', 'Printed Life-studies', 'Schedule', 'Newsletters', 'Scripture & Commentary', 'Contact Us'];
            if (index===0) {
              return {
                key,
                label: <Link href="/">{Topmenu[index]}</Link>
              }
            } else {
              return {
                key,
                label: <Link href={"/"+Topmenulink[index]}>{Topmenu[index]}</Link>
              }
            }
          })}
        />
        </Header>
)
}