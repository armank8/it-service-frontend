import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space } from "antd";
import styles from './ClientReview.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ClientReview = () => {
    return (
        // style={{ display: 'flex', width: '70vw', margin: '20px auto' }}
        <section>
            <h2 className="section_header">What our customers say about us</h2>
            <div className="">
                <div >
                    <div className={styles.clientName}>
                        <FontAwesomeIcon className="fa-bounce" icon={faUser}></FontAwesomeIcon>
                        <h3 className="section_subheader">Mr. Doodle</h3>
                    </div>

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
        </section>
    )
}

export default ClientReview