"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/slices/services/serviceSlice";
import { IService } from "@/types/globalTypes";
import { Button, Card, Col, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ChangeEventHandler, FormEvent, useState } from "react";

const Services = ({ services }: { services: any }) => {
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
        <section className="container">
            <div className="section_subheader">
                <h2>Our Exclusive Services</h2>

                <div>
                    <input style={{ padding: '10px', width: '200px', margin: '5px auto', display: 'block' }} placeholder="title...... Searching" type="text" name="" id="" onChange={searchKey as unknown as ChangeEventHandler<HTMLInputElement>} />
                </div>

                {/* <Row gutter={[8, 16,24]}></Row> */}
                <Row gutter={[8, 16]}>
                    {
                        services.map((service: any) => (
                            <Col key={service.id} xs={24} sm={24} md={12} lg={8}>

                                <Card bordered={true} hoverable style={{ color: 'black' }}>
                                    <Link href={`/services/${service?._id}`} style={{ color: 'black' }}>
                                        <h2 style={{ textAlign: 'center' }}>{service?.name}</h2>
                                        <Space style={{ display: 'flex', justifyContent: "center" }}>
                                            <Image src={service?.image} style={{}} alt='' width={200} height={200}></Image>
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
                                            <Button onClick={() => handleRemoveFromCart(service)} className="text-red-300 px-2">
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
        </section>
    )
}

export default Services