"use client";

import { Card, Col, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const Blogs = ({ blogs }: { blogs: any }) => {
    // console.log(blogs);
    return (
        <div style={{ margin: '20px auto', width:'80vw' }}>
            {/* <Row gutter={[8, 16,24]}></Row> */}
            <Row gutter={[8, 16]}>
                {
                    blogs.map((blog: any) => (
                        <Col key={blog._id} xs={24} sm={12} md={8} lg={6}>

                            <Link href={`/blogs/${blog?._id}`} style={{ color: 'none' }}>
                                <Card bordered={true} hoverable style={{ color: 'black' }}>
                                    <h1 style={{ textAlign: 'center' }}>{blog?.name}</h1>
                                    <Space style={{ display: 'flex', justifyContent: "center" }}>
                                        <Image src={blog?.image} style={{}} alt='' width={200} height={200}></Image>
                                    </Space>

                                    <Space style={{ display: 'flex', justifyContent: 'space-between', margin: '0 100px' }}>
                                        <p>{blog?.category}</p>
                                        <h1 style={{ color: 'crimson' }}>{blog?.price}</h1>
                                        <p>{blog?.status}</p>
                                    </Space>
                                    <p>{blog?.description?.length > 100 ? blog.description.slice(0, 100) + '......' : blog.description}
                                    </p>

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
        </div >
    )
}

export default Blogs;