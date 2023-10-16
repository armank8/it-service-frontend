"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateAdminPage = () => {
    const { role } = getUserInfo() as any;
    // console.log(role);

    const onSubmit = async (data: any) => {
        try {
            console.log(data);


        } catch (err) {
            toast.error("err-- task not done");
        }
    };

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `${role}`,
                        link: `/${role}`,
                    },
                    {
                        label: `${role}/admin`,
                        link: `/${role}/admin`,
                    },
                    {
                        label: `${role}/admin/create`,
                        link: `/${role}/admin/create`,
                    }
                ]}
            />
            <h1>Create Admin Page</h1>

            <div>
                <Form submitHandler={onSubmit}>
                    <div style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px",
                            }}
                            >
                                <FormInput type="text" name="email" size="large"
                                    label="Email"
                                />
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px",
                            }}
                            >
                                <FormInput type="text" name="password" size="large"
                                    label="Password"
                                />
                            </Col>

                        </Row>
                    </div>
                    <Button htmlType="submit" type="primary">
                        Create
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateAdminPage