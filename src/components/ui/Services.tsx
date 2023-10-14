import { Card, Col, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }: { services: any }) => {
    console.log(services);
    return (
        <div style={{ margin: '0 auto' }}>
            {/* <Row gutter={[8, 16,24]}></Row> */}
            <Row gutter={[8, 16]}>
                {
                    services.map((service: any) => (
                        <Col key={service.id} xs={24} sm={24} md={12} lg={8}>

                            <Link href={`/products/${service?.id}`} style={{ color: 'none' }}>
                                <Card bordered={true} hoverable style={{ color: 'black' }}>
                                    <h1 style={{ textAlign: 'center' }}>{service?.name}</h1>
                                    <Space style={{ display: 'flex', justifyContent: "center" }}>
                                        {/* <Image src={service?.image} style={{}} alt='' width={200} height={200}></Image> */}
                                    </Space>

                                    <Space style={{ display: 'flex', justifyContent: 'space-between', margin: '0 100px' }}>
                                        <p>{service?.category}</p>
                                        <h1 style={{ color: 'crimson' }}>{service?.price}</h1>
                                        <p>{service?.status}</p>
                                    </Space>
                                    <p>{service?.description?.length > 100 ? service.description.slice(0, 100) + '......' : service.description}
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

export default Services