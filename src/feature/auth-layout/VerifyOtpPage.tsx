"use client";

import React from "react";
import { Form, Button, Grid, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

const VerifyOtpPage: React.FC = () => {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();
  const email = Cookies.get("email");

  const onFinish = (values: any) => {
    console.log("Success:", values);
    toast.success("OTP verified successfully");
    router.push("/auth/reset-password");
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
            Verify OTP
          </h2>
          <p className="text-[#919191]">
            Enter your verification code that we have sent your email{" "}
            <span className="text-gray-700 font-medium">{email}</span>
          </p>
        </div>

        {/* Form Section */}
        <Form
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="space-y-6"
        >
          <Form.Item
            className="flex items-center justify-center mx-auto w-full gap-7"
            name="otp"
            rules={[
              {
                required: true,
                message: "Please input otp code here!",
              },
            ]}
          >
            <Input.OTP
              size="large"
              inputMode="numeric"
              type="tel"
              style={{
                width: "100%",
                height: 60,
              }}
              className=""
              variant="filled"
              length={4}
            />
          </Form.Item>

          <Form.Item className="mt-12 mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12! bg-primary! hover:bg-[#00424a]! border-none! rounded-lg text-lg font-semibold! text-white!"
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
