"use client";

import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { AppstoreOutlined, MailOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import items from '@/utils/dropdown-items';
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer } from 'react-toastify';

const RootLayout = ({ children }) => {
    // const { data: session } = useSession();
    // console.log("from header", session);

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Layout className="layout">
            <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="demo-logo" style={{ color: "white", fontWeight: "bold", fontSize: "20px", lineHeight: '0' }}>
                        <Link href='/'>PC-Maker</Link>
                    </div>
                    <Button type="primary">
                        <Link href='/pc-builder'>PC BUILDER</Link>
                    </Button>

                    <div style={{}}>
                        <Dropdown menu={{ items }}>
                            <Space style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>Categories</Space>
                        </Dropdown>
                        {/* {
                            session?.user ?
                                <Button onClick={() => signOut()}>Logout</Button> :
                                <Link href='/login'><Button>Login</Button></Link>
                        } */}
                    </div>
                </Header>

                <Content>
                    <div className="site-layout-content"
                        style={{
                            background: colorBgContainer,
                            minHeight: "100vh"
                        }}
                    >
                        
                        {children}
                    </div>

                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    PC-Maker @ 2023
                </Footer>
            </Layout>
        </div>
    )
}

export default RootLayout;