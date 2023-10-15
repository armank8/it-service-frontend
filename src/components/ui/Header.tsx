"use client";

import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;

const CommonHeader = () => {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <div className="demo-logo" style={{ color: "white", fontWeight: "bold", fontSize: "20px", lineHeight: '0' }}>
                <Link href='/'>IT-HOUSE</Link>
            </div>
            <Button type="primary">
                <Link href='/signup'>Sign Up</Link>
            </Button>
            <Button type="primary">
                <Link href='/login'>Login</Link>
            </Button>

            <div style={{}}>
                {/* <Dropdown menu={{ items }}>
                    <Space style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>Categories</Space>
                </Dropdown> */}
                {/* {
                            session?.user ?
                                <Button onClick={() => signOut()}>Logout</Button> :
                                <Link href='/login'><Button>Login</Button></Link>
                        } */}
            </div>
        </Header>
    )
}

export default CommonHeader