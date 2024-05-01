"use client";
import DIYForm from "@/components/forms/DIYForm";
import DIYInput from "@/components/forms/DIYInput";
import { userLogin } from "@/service/actions/userLogin";
import { Button, Flex, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email("please enter a valid email address"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
    } catch (err: any) {
      console.log("Can not login user");
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Flex vertical>
        <DIYForm onSubmit={handleLogin}>
          <DIYInput type="text" name="email" label="" />
          <DIYInput type="password" name="password" label="" />
          <Button htmlType="submit">Login</Button>
        </DIYForm>
      </Flex>
    </Row>
  );
};

export default LoginPage;
