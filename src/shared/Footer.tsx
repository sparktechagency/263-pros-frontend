"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Button, Modal, Form, Input, message } from "antd";
import Image from "next/image";
import { myFetch } from "../../helpers/myFetch";
import { toast } from "sonner";

export default function Footer() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleContactSubmit = async (values: any) => {
    toast.promise(
      myFetch("/help-and-support", {
        method: "POST",
        body: values,
      }),
      {
        loading: "Sending message...",
        success: (res: any) => {
          if (res?.success) {
            setIsModalVisible(false);
            form.resetFields();
            return res?.message || "Message sent successfully";
          } else {
            if (res?.error && Array.isArray(res.error)) {
              res.error.forEach((err: { message: string }) => {
                toast.error(err.message);
              });
            }
            throw new Error(res?.message || "Something went wrong!");
          }
        },
        error: (err: any) => err?.message || "Something went wrong!",
      },
    );
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How it Works", href: "/how-it-works" },
  ];

  const customerLinks = [
    { label: "Find a Service provider", href: "/" },
    { label: "Browse Services", href: "/services" },
    // { label: "Customer Feedback", href: "/feedback" },
    // { label: "Login", href: "/auth/login" },
  ];

  const providerLinks = [
    { label: "Join As Professional", href: "/how-it-works" },
    // { label: "Help & Support", href: "/help" },
    { label: "About Us", href: "/about" },
  ];

  const aboutLinks = [
    // { label: "Contact Us", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-[#F3F8FB] pt-16 lg:pt-24 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-4 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start px-2">
            {/* <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
              263<span className="text-[#FFCB20]">prolink</span>
            </h2> */}
            <Image
              src={"/Logo2.png"}
              alt="logo"
              width={600}
              height={200}
              className="h-fit lg:h-24 w-full lg:w-fit object-contain mb-6"
            />
            <p className="text-[15px] font-medium text-[#2E2E2E] mb-4">
              Need Help?
            </p>
            <Button
              size="large"
              onClick={() => setIsModalVisible(true)}
              className="bg-primary! text-white! border-0! h-11! px-6! rounded-lg font-medium mb-10 tracking-wide!"
            >
              Contact Us
            </Button>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#292929] rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#292929] rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#292929] rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Primary Links Column */}
          <div className="lg:col-span-2 flex flex-col lg:pl-4">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">
              Quick Links
            </h3>
            <div className="flex flex-col gap-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* For Customer Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">
              For Customer
            </h3>
            <div className="flex flex-col gap-5">
              {customerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* For Service Provider Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">
              For Service Provider
            </h3>
            <div className="flex flex-col gap-5">
              {providerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">Support</h3>
            <div className="flex flex-col gap-5">
              {aboutLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-left text-[#646464] text-[15px] font-medium border-t border-[#EBEBEB] w-full py-4">
          <div className="flex flex-wrap items-center gap-1">
            <span>@2026 263 prolink.</span>
            <Link
              href="/terms"
              className="hover:text-primary pl-1 transition-all"
            >
              Terms and Condition/
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary pl-1 transition-all"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Us Modal */}
      <Modal
        title={
          <div className="text-xl font-bold text-[#2E2E2E] mb-2">
            Contact Us
          </div>
        }
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleContactSubmit}
          className="mt-4"
        >
          <Form.Item
            label={<span className="font-medium text-[#2E2E2E]">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input size="large" placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-[#2E2E2E]">Subject</span>}
            name="title"
            rules={[{ required: true, message: "Please enter a subject!" }]}
          >
            <Input size="large" placeholder="Enter subject" />
          </Form.Item>

          <Form.Item
            label={
              <span className="font-medium text-[#2E2E2E]">Description</span>
            }
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea
              size="large"
              rows={4}
              placeholder="How can we help you?"
            />
          </Form.Item>

          <Form.Item className="mb-0 mt-6 pt-2 text-right">
            <Button
              onClick={() => setIsModalVisible(false)}
              size="large"
              className="mr-3"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-primary! px-8!"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </footer>
  );
}
