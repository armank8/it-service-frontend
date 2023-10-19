"use client";
import { Button, Col, Input, Row } from "antd";
import signupImage from "../../assets/sign-up-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation, useUserSignupMutation } from "@/redux/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Response } from "@/types/globalTypes";

type FormValues = {
  email: string;
  password: string;
  role?:string;
};

const SignupPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (info) => {
    try {
      // console.log(info);
      info["role"] = "user";
      const res:Response = await userSignup(info);
      if (res.data) {
        // console.log(res);
        toast("User Created successfully");
        router.push('/login')
      }else if(res.error){
        // console.log(res);
        toast.error("User not Created");
      }
    } catch (err) { }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={signupImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First Create your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="email" type="text" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              SignUp
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignupPage;
