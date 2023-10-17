"use client";

import Loading from "@/app/loading";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { useGetSingleServiceQuery } from "@/redux/api/servicesApi";
import { Badge, Card, Col, Row, Tag } from "antd";
import Image from "next/image";

const BlogDetailsPage = ({ params }: { params: any }) => {
    const id = params.id;
    const { data, isLoading } = useGetSingleBlogQuery(id);
    console.log(data);
    if (isLoading) {
        return <Loading></Loading>
    }

    // const service = data?.data[0];
    const blog = data[0];
    // console.log(data,service);

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    {/* <Image src={product?.image} width={500} height={500} alt="product-image"></Image> */}
                </Col>

                <Col span={12}>
                    <Card style={{ margin: '50px 0px' }} hoverable>
                        <h3 >{blog?.title}</h3>

                        <div>
                            <Image src={blog?.image} width={500} height={400} alt="Blog"></Image>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '25px' }}>
                            
                            <Tag color="cyan">Category: <span style={{ fontWeight: 'bold' }}>{blog?.category}</span></Tag>
                            
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0px' }}>
                            <h3 style={{ margin: '0', color: 'navyblue' }}>Reviews</h3>
                            {
                                blog?.reviews?.map((review:any) => (
                                    <p style={{ margin: '0' }} key={review}>{review}</p>
                                ))
                            }
                        </div>

                        <h3 >{blog?.description}</h3>

                        {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0px' }}>
                            <h3 style={{ margin: '0', color: 'navyblue' }}>Key Features</h3>
                            {
                                service['key-features']
                                    .map((features:any) => (
                                        <p style={{ margin: '0' }} key={features}>{features}</p>
                                    ))
                            }
                        </div> */}
                    </Card>

                </Col>
            </Row>
        </div >
    )
}

export default BlogDetailsPage;