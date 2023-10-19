import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space } from "antd"

const ClientReview = () => {
    return (
        <div style={{display:'flex',width:'70vw',margin:'20px auto'}}>
            <div>
                <h3 style={{ textAlign: 'center' }}>Mr. Doodle</h3>
                <Space wrap size={16}>
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                </Space>
                <p>Our tech service is your gateway to a world of innovation and efficiency. We specialize in delivering cutting-edge solutions tailored to your unique needs. From software development and IT support to cybersecurity and cloud computing, were your trusted partner in navigating the ever-evolving tech landscape. </p>

            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>Mr. Doodle</h3>
                <Space wrap size={16}>
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                </Space>
                <p>Our tech service is your gateway to a world of innovation and efficiency. We specialize in delivering cutting-edge solutions tailored to your unique needs. From software development and IT support to cybersecurity and cloud computing, were your trusted partner in navigating the ever-evolving tech landscape. </p>

            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>Mr. Doodle</h3>
                <Space wrap size={16}>
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                </Space>
                <p>Our tech service is your gateway to a world of innovation and efficiency. We specialize in delivering cutting-edge solutions tailored to your unique needs. From software development and IT support to cybersecurity and cloud computing, were your trusted partner in navigating the ever-evolving tech landscape. </p>

            </div>
        </div>
    )
}

export default ClientReview