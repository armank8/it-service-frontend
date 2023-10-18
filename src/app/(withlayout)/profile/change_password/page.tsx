"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import toast from "react-hot-toast";
// import { Form } from "antd";

const ChangePasswordPage = () => {
    const { role, id } = getUserInfo() as any;
    // console.log(role, id);

    const [changePassword] = useChangePasswordMutation();
    // console.log(data);

    const onSubmit = async (info: any) => {
        try {
            console.log(info);
            const res = await changePassword({ id, info });
            if (res.data) {
                // console.log(res);
                toast.success("Password changed successfully");

            } else if (res.error) {
                // console.log(res);
                toast.error("Password not changed ");
            }

        } catch (err) {
            toast.error("Password not changed");
        }
    };

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `profile`,
                        link: `/profile`,
                    },
                    {
                        label: `profile/change_password`,
                        link: `/profile/change_password`,
                    }
                ]}
            />
            <h1>Change Password page</h1>

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
                                <FormInput type="text" name="old_password" size="large"
                                    label="Old Password"
                                />
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px",
                            }}
                            >
                                <FormInput type="text" name="new_password" size="large"
                                    label="New Password"
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

export default ChangePasswordPage