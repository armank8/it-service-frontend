"use client";

import { Card, Col, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Blogs.module.scss';

const Blogs = ({ blogs }: { blogs: any }) => {
    // console.log(blogs);
    return (
        <section className={`section_container ${styles.section_modifier}`}>
            <h2 className="section_header">Our Tech Blogs</h2>
            {/* <Row gutter={[8, 16,24]}></Row> */}
            <Row gutter={[32, 32]}>
                {
                    blogs.map((blog: any) => (
                        <Col key={blog._id} sm={24} md={12} lg={8}>

                            <Link href={`/blogs/${blog?._id}`} style={{ color: 'none' }}>
                                <Card bordered={true} hoverable style={{ color: 'black', backgroundColor: '#eee' }}>

                                    <Space>
                                        <Image src={blog?.image} style={{ maxWidth: '100%', height: 'auto', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }} alt='' width={900} height={300}></Image>
                                    </Space>

                                    <Space style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                                        {/* <h4>{blog?.name}</h4> */}

                                        <Space>
                                            <span className="smallP">category</span>
                                            <span style={{ color: 'crimson' }}>{blog?.category}</span>
                                        </Space>
                                        <p>{blog?.description?.length > 100 ? blog.description.slice(0, 100) + '......' : blog.description}
                                        </p>
                                    </Space>

                                </Card>
                            </Link>

                            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {
                            // handleAddComponent(product)
                            // href="/pc-builder" 
                            children && <Link href='/pc-builder'><Button onClick={() => dispatch(addComponent(product))} type="primary"> Add to Builder </Button></Link>
                        }
                    </div> */}

                        </Col>
                    ))
                }

            </Row>
        </section >
    )
}

export default Blogs;