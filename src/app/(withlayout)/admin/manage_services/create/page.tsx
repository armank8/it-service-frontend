"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import toast from "react-hot-toast";

const CreateServicePage = () => {
  const { role } = getUserInfo() as any;
  console.log(role);

  const onSubmit = async (info: any) => {
    try {
      info["role"] = "admin";
      console.log(info);
      // const res = await userSignup(info);
      if (res.data) {
        // console.log(res);
        toast("Service Created successfully");

      } else if (res.error) {
        // console.log(res);
        toast.error("Service not Created");
      }

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
            label: `${role}/manage_services`,
            link: `/${role}/manage_services`,
          },
          {
            label: `${role}/manage_services/create`,
            link: `/${role}/manage_services/create`,
          }
        ]}
      />
      <h1>Create Service Page</h1>

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
                <FormInput type="text" name="name" size="large"
                  label="Name"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormInput type="text" name="price" size="large"
                  label="Price"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormInput type="text" name="category" size="large"
                  label="Category"
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

export default CreateServicePage