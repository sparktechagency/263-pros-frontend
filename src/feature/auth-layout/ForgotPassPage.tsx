"use client";

import React from "react";
import { Form, Input, Button, Grid } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { myFetch } from "../../../helpers/myFetch";
const ForgotPassPage: React.FC = () => {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();

  const onFinish = async (values: { email: string }) => {
    try {
      const res = await myFetch("/auth/forgot-password", {
        method: "POST",
        body: values,
      });
      if (res?.success) {
        toast.success(res?.message || "OTP verified successfully", { id: "forget" });
        localStorage.setItem("userType", "forget")
        router.push(`/auth/verify-otp?email=${values?.email}`);
      } else {
        if (res?.error && Array.isArray(res.error)) {
          res.error.forEach((err: { message: string }) => {
            toast.error(err.message, { id: "forget" });
          });
        } else {
          toast.error(res?.message || "Something went wrong!", { id: "forget" });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-4">
      <div
        className={`w-full max-w-xl h-fit ${
          lg ? "boxShadow" : ""
        } px-4 lg:px-10 py-6 lg:py-12`}
      >
        {/* Logo Section */}
        <div className="text-start mb-8">
          <div className="flex">
            <Image
              src={"/Logo2.png"}
              alt="Logo"
              width={280}
              height={120}
              className="h-6 w-fit"
            />
          </div>
          <h2 className="text-3xl font-semibold text-[#292929] mt-4 mb-2">
            Forgot Password
          </h2>
          <p className="text-[#919191]">
            Enter your email to send an OTP for verification
          </p>
        </div>

        {/* Form Section */}
        <Form
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="space-y-3"
        >
          <Form.Item
            label={
              <span className="text-gray-600 font-medium">Email address</span>
            }
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email" },
            ]}
            className="mb-4"
          >
            <Input
              placeholder="danaigurira123@gmail.com"
              className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </Form.Item>

          <Form.Item className="mt-12 mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12! bg-primary! hover:bg-[#00424a]! border-none! rounded-lg text-lg font-semibold! text-white!"
            >
              Get OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
