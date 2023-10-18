"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { useCreateServiceMutation } from "@/redux/api/servicesApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import toast from "react-hot-toast";

const CreateServicePage = () => {
  const { role } = getUserInfo() as any;
  console.log(role);

  const [createService] = useCreateServiceMutation();

  const onSubmit = async (info: any) => {
    try {
      console.log(info);
      const res = await createService(info);
      if (res.data) {
        console.log(res);
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
                <FormInput type="number" name="id" size="large"
                  label="Id" placeholder="Unique Id - 1,2,3,..."
                />
              </Col>
              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormInput type="text" name="name" size="large"
                  label="Name" placeholder="Service  name"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormInput type="number" name="price" size="large"
                  label="Price"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormInput type="text" name="category" size="large"
                  label="Category" placeholder="Repair | Service"
                />
              </Col>

              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormInput type="text" name="image" size="large"
                  label="Image" placeholder="Image-link"
                />
              </Col>
             

              <Col className="gutter-row" span={8} style={{
                marginBottom: "10px",
              }}
              >
                <FormTextArea name="description"  label="Description" rows={6}></FormTextArea>
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