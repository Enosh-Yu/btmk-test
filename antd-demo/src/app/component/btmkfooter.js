import Link from 'next/link'

import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

import { HomeOutlined, PlayCircleFilled, LinkOutlined, TranslationOutlined } from '@ant-design/icons';


export default function BtmkFooter({}) {
  return (

        <Footer style={{ textAlign: 'center', }}>
        © 1997-2023 Living Stream Ministry. All rights reserved. Reproduction in whole or in part is prohibited.
        </Footer>
  )
}