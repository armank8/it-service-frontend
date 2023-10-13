"use client";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const CommonFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            IT-House @ 2023
            {/* {Date()} */}
        </Footer>
    )
}

export default CommonFooter;