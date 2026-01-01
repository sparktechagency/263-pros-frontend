"use client";

import React from "react";
import { Form, Input, Button, Checkbox, Grid } from "antd";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginPage: React.FC = () => {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    toast.success("Login successful");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  lg:px-4">
      <div
        className={`w-full max-w-xl h-fit ${
          lg ? "boxShadow" : ""
        } px-4 lg:px-10 py-6 lg:py-12`}
      >
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex-center">
            <Image
              src={"/Logo2.png"}
              alt="Logo"
              width={280}
              height={120}
              className="h-6 w-fit"
            />
          </div>
          <h2 className="text-3xl font-semibold text-[#292929] mt-4 mb-2">
            Welcome Back
          </h2>
          <p className="text-[#919191]">Login to your account below</p>
        </div>

        {/* Google Login Button */}
        <Button
          block
          className="h-14! border border-[#C0C0C0] rounded-lg flex! items-center! justify-center! gap-2 hover:bg-gray-50 transition-colors mb-8"
          icon={<FcGoogle size={22} />}
        >
          <span className="text-[#292929] font-medium -mt-1">
            Continue with Google
          </span>
        </Button>

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
              placeholder="e.g. danaigurira123@gmail.com"
              className="h-12 rounded-lg border-gray-300 focus:border-[#00545D] focus:ring-1 focus:ring-[#00545D]"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-600 font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            className="mb-0"
          >
            <Input.Password
              placeholder="************"
              className="h-12 rounded-lg border-gray-300 focus:border-[#00545D] focus:ring-1 focus:ring-[#00545D]"
            />
          </Form.Item>

          <div className="flex justify-end ">
            <Link href="/auth/forgot-password" title="Forgot Password?">
              <span className="text-gray-500 hover:text-[#00545D] text-sm font-medium">
                Forgot Password?
              </span>
            </Link>
          </div>

          <Form.Item className="my-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12!   bg-primary! hover:bg-[#00424a]! border-none! rounded-lg text-lg font-semibold! text-white!"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-8">
          <p className="text-gray-500">
            Don't have account?{" "}
            <Link href="/auth/register">
              <span className="text-primary font-medium hover:underline">
                Sign up for free
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
