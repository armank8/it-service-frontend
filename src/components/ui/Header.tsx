"use client";

import { authKey } from '@/constants/storageKey';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const { Header, Content, Footer } = Layout;

const CommonHeader = () => {
    const { role } = getUserInfo() as any;
    //   console.log(role);
    const router = useRouter();
    const logOut = () => {
        removeUserInfo(authKey);
        toast.error("Logged Out");
        router.push("/login");
    }

    const items: MenuProps['items'] = [
        {
            key: "0",
            label: <Button onClick={logOut} type="text" danger> LogOut </Button>
        },
    ]

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

            <Dropdown menu={{ items }}>
                <a>
                    <Space wrap size={16}>
                        {role}
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                </a>
            </Dropdown>

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