"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/slices/services/serviceSlice";
import { IService } from "@/types/globalTypes";
import { Button, Card, Col, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ChangeEventHandler, FormEvent, useState } from "react";

import styles from '../styles/Services.module.scss';
import Title from "antd/es/typography/Title";

const Services = ({ services, type }: { services: any, type: any }) => {
    const [inputValue, setInputValue] = useState<string | null>('');
    console.log(inputValue);

    const { services: cartServices, total } = useAppSelector((state) => state.service);
    const dispatch = useAppDispatch();

    // console.log(services);
    const handleAddToCart = (service: IService) => {
        dispatch(addToCart(service));
    }
    const handleRemoveFromCart = (service: IService) => {
        dispatch(removeFromCart(service));
    }

    const searchKey = (event: FormEvent<HTMLFormElement>) => {
        // console.log(event.target.value);
        // setInputValue(event.target.value!);
        const inputElement = event.target as HTMLInputElement;
        setInputValue(inputElement.value);
    }

    if (inputValue) {
        services = services.filter((service: any) => (
            service.name.toLowerCase().includes(inputValue.toLowerCase())
        ))
        // console.log(books);
    };

    return (
        <section className="">
            <div className="section_container">
                <h2 className="section_header">Our Exclusive Services</h2>

                {/* search bar */}
                {
                    type &&
                    <div>
                        <input style={{ padding: '10px', width: '200px', margin: '5px auto', display: 'block' }} placeholder="title...... Searching" type="text" name="" id="" onChange={searchKey as unknown as ChangeEventHandler<HTMLInputElement>} />
                    </div>
                }

                {/* <Row gutter={[8, 16,24]}></Row> */}
                <Row gutter={[32, 32]}>
                    {
                        services.map((service: any) => (
                            <Col key={service.id} xs={24} sm={24} md={12} lg={8}>

                                <Card bordered={false} hoverable style={{ color: 'black',backgroundColor:'#eee' }}>
                                    <Link href={`/services/${service?._id}`} style={{ color: 'black' }}>

                                        <Space>
                                            <Image src={service?.image} width={700} height={500} style={{ maxWidth: '100%', height: 'auto', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }} alt=''></Image>
                                        </Space>

                                        <Space style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                                            <Title style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 'bold' }}>{service?.name}</Title>

                                            <Space style={{ display: 'flex', justifyContent: 'center' }}>
                                                <p><span className="smallP">Category</span>
                                                    {service?.category}</p>
                                                <h3 style={{ color: 'crimson' }}>{service?.price}</h3>
                                                <p>{service?.status}</p>
                                            </Space>
                                            <p>{service?.description?.length > 100 ? service.description.slice(0, 100) + '......' : service.description}
                                            </p>


                                            <Space style={{ display: 'flex', justifyContent: 'center' }}>
                                                {
                                                    cartServices.find((cart) => cart._id === service._id) ? (
                                                        <Button onClick={() => handleRemoveFromCart(service)} className="text-red-300 px-2">
                                                            Remove From cart
                                                        </Button>
                                                    ) : (
                                                        <Button onClick={() => handleAddToCart(service)}>Add To Cart</Button>
                                                    )
                                                }
                                            </Space>
                                        </Space>
                                    </Link>
                                </Card>



                            </Col>
                        ))
                    }

                </Row>
            </div >
        </section >
    )
}

export default Services