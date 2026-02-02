"use client";

import React, { useEffect, useState } from "react";
import { Form, Button, Grid, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { myFetch } from "../../../helpers/myFetch";

const VerifyOtpPage: React.FC = () => {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailFromQuery = new URLSearchParams(window.location.search).get(
      "email",
    );
    setEmail(emailFromQuery);
  }, []);

  const onFinish = async (values: { otp: string }) => {
    const userType = localStorage.getItem("userType");
    const data = {
      email: email,
      oneTimeCode: parseInt(values?.otp),
    };

    try {
      const res = await myFetch("/auth/verify-email", {
        method: "POST",
        body: data,
      });
      // console.log(res, "res");
      if (res?.success) {
        toast.success(res?.message || "OTP verified successfully", {
          id: "otp-verify",
        });
        if (userType === "forget") {
          router.push(`/auth/reset-password?token=${res?.data}`);
        } else {
          router.push(`/auth/login`);
        }
      } else {
        toast.error(res?.message || "Something went wrong!", {
          id: "otp-verify",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleResendEmail = async () => {
    const data = {
      email: email,
    };

    try {
      const res = await myFetch("/auth/resend-otp", {
        method: "POST",
        body: data,
      });

      if (res?.success) {
        toast.success(res?.message || "OTP verified successfully", {
          id: "otp-resend",
        });
      } else {
        toast.error(res?.message || "Something went wrong!", {
          id: "otp-resend",
        });
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
              length={6}
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
        <div className="flex items-center justify-center gap-1 mt-6 ">
          <p className="text-[16px] text-[#818181] ">
            You have not received the email?
          </p>

          <p
            onClick={handleResendEmail}
            className="login-form-forgot underline font-medium text-[16px] text-primary"
            style={{ color: "#00B047", cursor: "pointer" }}
          >
            Resend
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
