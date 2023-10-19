"use client";

import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { useAddReviewMutation, useGetSingleServiceQuery } from "@/redux/api/servicesApi";
import { getUserInfo } from "@/services/auth.service";
import { IService } from "@/types/globalTypes";
import { Badge, Button, Card, Col, Row, Tag } from "antd";
import Image from "next/image";
import toast from "react-hot-toast";

const ServiceDetailsPage = ({ params }: { params: any }) => {
    const id = params.id;
    const { role, id: userId } = getUserInfo() as any;
    const { data, isLoading } = useGetSingleServiceQuery(id);
    const [addReview] = useAddReviewMutation(id);
    // console.log(data);
    if (isLoading) {
        return <Loading></Loading>
    }

    // const service = data?.data[0];
    const service = data[0];
    // console.log(data,service);

    const slotOptions = [
        {
            label: '10.00 AM',
            value: '10.00 AM',
        },
        {
            label: '1.00 PM',
            value: '1.00 PM',
        },
        {
            label: '4.00 PM',
            value: '4.00 PM',
        }
    ]

    const onSubmit = async (info: any) => {
        try {
            // console.log(id, info);
            const res = await addReview({ id, info });
            // // console.log(res);
            if (res.data) {
                // console.log(res);
                toast("Review Created successfully");

            } else if (res.error) {
                // console.log(res);
                toast.error("Review not Created");
            }

        } catch (err) {
            toast.error("err-- task not done");
        }
    };

    const handleBooking = (bookingForm: any) => {
        try {
            if (!bookingForm.date) {
                toast.error("Please Select date");
            }
            if (!bookingForm.slot) {
                toast.error("Please Select slot");
            }
            console.log(bookingForm.date, bookingForm.slot, service._id, userId);
            
        } catch (error) {
            toast.error("err- task not done");
        }
    }

    return (
        <div style={{ width: '70vw', margin: '20px auto' }}>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Image src={service?.image} width={500} height={500} alt="product-image"></Image>
                </Col>

                <Col span={12}>
                    <Card style={{ margin: '50px 0px' }} hoverable>
                        <h1 style={{ textAlign: 'center' }}>{service?.name}</h1>

                        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '25px' }}>
                            <Tag color="red">Price: <span style={{ fontWeight: 'bold' }}>{service?.price}</span></Tag>
                            <Tag color="cyan">Category: <span style={{ fontWeight: 'bold' }}>{service?.category}</span></Tag>
                            {/* <Tag color="blue">Status:<span style={{ fontWeight: 'bold' }}> {service?.status}</span></Tag> */}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Badge count={service?.rating}><Tag color='warning'>Rating</Tag></Badge>


                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0px' }}>
                            <h3 style={{ margin: '0', color: 'navyblue' }}>Reviews</h3>
                            {
                                service?.reviews?.map((review: any) => (
                                    <p style={{ margin: '0' }} key={review}>{review}</p>
                                ))
                            }
                        </div>
                        <div>
                            <h2>Select slot and date</h2>
                            <Form submitHandler={handleBooking}>
                                <div style={{
                                    border: "1px solid #d9d9d9",
                                    borderRadius: "5px",
                                    padding: "15px",
                                    marginBottom: "10px",
                                }}>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col className="gutter-row" span={12} style={{
                                            marginBottom: "10px",
                                        }}
                                        >
                                            <FormDatePicker name="date" label="Select Date"></FormDatePicker>
                                        </Col>
                                        <Col className="gutter-row" span={12} style={{
                                            marginBottom: "10px",
                                        }}
                                        >
                                            <FormSelectField name="slot" label='Select Slot' options={slotOptions}></FormSelectField>
                                        </Col>
                                    </Row>
                                </div>
                                <Button htmlType="submit" type="primary" danger>
                                    Book Service
                                </Button>

                            </Form>
                        </div>

                        <div>
                            <h2>Add Review</h2>
                            <Form submitHandler={onSubmit}>
                                <div style={{
                                    border: "1px solid #d9d9d9",
                                    borderRadius: "5px",
                                    padding: "15px",
                                    marginBottom: "10px",
                                }}>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col className="gutter-row" span={24} style={{
                                            marginBottom: "10px",
                                        }}
                                        >
                                            <FormInput type="text" name="review" size="large"
                                                label="Review"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <Button htmlType="submit" type="primary">
                                    Add
                                </Button>
                            </Form>
                        </div>
                    </Card>

                </Col>
            </Row>
        </div >
    )
}

export default ServiceDetailsPage;