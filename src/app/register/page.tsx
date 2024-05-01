"use client";
import DIYForm from "@/components/forms/DIYForm";
import DIYInput from "@/components/forms/DIYInput";
import { userRegister } from "@/service/actions/userRegister";
import { Button, Flex, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export const userValidationSchema = z.object({
  name: z.string().min(1, "please enter your name"),
  email: z.string().email("please enter your email"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

const RegisterPage = () => {
  const handleRegister = async (values: FieldValues) => {
    try {
      const res = await userRegister(values);
      console.log(res);
    } catch (err: any) {
      console.log("Can not register user");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Flex vertical>
        <DIYForm onSubmit={handleRegister}>
          <DIYInput type="text" name="name" label="" />
          <DIYInput type="text" name="email" label="" />
          <DIYInput type="password" name="password" label="" />
          <Button htmlType="submit">Login</Button>
        </DIYForm>
      </Flex>
    </Row>
  );
};

export default RegisterPage;
