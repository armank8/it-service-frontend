"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/slices/services/serviceSlice";
import { IService } from "@/types/globalTypes";
import { Button, Card, Col, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }: { services: any }) => {
    const { services: cartServices, total } = useAppSelector((state) => state.service);
    const dispatch = useAppDispatch();
    // console.log(services);
    const handleAddToCart = (service: IService) => {
        dispatch(addToCart(service));
    }
    const handleRemoveFromCart = (service: IService) => {
        dispatch(removeFromCart(service));
    }
    return (
        <div style={{ margin: '30px auto' }}>
            {/* <Row gutter={[8, 16,24]}></Row> */}
            <Row gutter={[8, 16]}>
                {
                    services.map((service: any) => (
                        <Col key={service.id} xs={24} sm={24} md={12} lg={8}>

                            <Card bordered={true} hoverable style={{ color: 'black' }}>
                                <Link href={`/services/${service?._id}`} style={{ color: 'black' }}>
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
                                </Link>

                                {
                                    cartServices.find((cart) => cart._id === service._id) ? (
                                        <Button onClick={()=>handleRemoveFromCart(service)} className="text-red-300 px-2">
                                            Remove From cart
                                        </Button>
                                    ) : (
                                        <Button onClick={() => handleAddToCart(service)}>Add To Cart</Button>
                                    )
                                }
                            </Card>



                        </Col>
                    ))
                }

            </Row>
        </div >
    )
}

export default Services