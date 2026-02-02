"use client";

import React from "react";
import { Form, Input, Button, Grid } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { myFetch } from "../../../helpers/myFetch";

const RegisterPage: React.FC = () => {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const res = await myFetch("/user", {
        method: "POST",
        body: values,
      });
      // console.log(res);

      if (res?.success) {
        toast.success("Account created successfully!", { id: "sign-up" });
        localStorage.setItem("userType", "register");
        router.push(`/auth/verify-otp?email=${values.email}`);
      } else {
        if (res?.error && Array.isArray(res.error)) {
          res.error.forEach((err: { message: string }) => {
            toast.error(err.message, { id: "sign-up" });
          });
        } else {
          toast.error(res?.message || "Something went wrong!", {
            id: "sign-up",
          });
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
            Sign up
          </h2>
          <p className="text-[#919191]">
            Enter your details below to create your account
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
            label={<span className="text-gray-600 font-medium">Your Name</span>}
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
            className="mb-4"
          >
            <Input
              placeholder="Danai Gurira"
              className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </Form.Item>

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

          <Form.Item
            label={<span className="text-gray-600 font-medium">Password</span>}
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long",
              },
            ]}
            className="mb-4"
          >
            <Input.Password
              placeholder="************"
              className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-gray-600 font-medium">
                Confirm Password
              </span>
            }
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
            className="mb-0"
          >
            <Input.Password
              placeholder="************"
              className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </Form.Item>

          <Form.Item className="my-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12! bg-primary! hover:bg-[#00424a]! border-none! rounded-lg text-lg font-semibold! text-white!"
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-8">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/login">
              <span className="text-primary font-medium hover:underline">
                login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
