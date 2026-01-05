"use client";

import React from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Checkbox,
  Select,
  Button,
  ConfigProvider,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  serviceName,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    onClose();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#055E6E",
          borderRadius: 8,
        },
        components: {
          Input: {
            activeBorderColor: "#055E6E",
            hoverBorderColor: "#055E6E",
          },
          Select: {},
        },
      }}
    >
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={null}
        width={600}
        centered
        className="service-request-modal max-h-[calc(100vh-100px)] overflow-auto"
      >
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-[#055E6E]">
            263 <span className="text-[#FFC221]">Pros</span>
          </h2>
          <div className="w-full h-px bg-gray-100 my-4" />
          <h3 className="text-xl font-medium text-[#055E6E]">
            Tell us about your service request
          </h3>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ service: serviceName }}
          className="service-form"
        >
          <Form.Item
            label={<span className="text-[#055E6E] font-medium">Service</span>}
            name="service"
          >
            <Input placeholder="Service name" className="h-10!" />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#055E6E] font-medium">Location</span>}
            name="location"
          >
            <Input placeholder="Harare" className="h-10!" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">
                Preferred date{" "}
                <span className="text-gray-400 text-xs italic font-normal">
                  (if known)
                </span>
              </span>
            }
            name="date"
          >
            <DatePicker className="w-full h-10!" placeholder="Date" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">
                Urgent Request?
              </span>
            }
            name="urgent"
          >
            <Checkbox.Group className="flex gap-8">
              <Checkbox value="yes">Yes, this is urgent</Checkbox>
              <Checkbox value="no">No</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">
                Service details
              </span>
            }
            name="details"
          >
            <TextArea
              rows={4}
              placeholder="Describe the job you need done..."
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">
                Budget range{" "}
                <span className="text-gray-400 text-xs italic font-normal">
                  (Optional)
                </span>
              </span>
            }
            name="budget"
          >
            <Select placeholder="Not sure yet" className="h-10!">
              <Option value="not-sure">Not sure yet</Option>
              <Option value="low">$10 - $50</Option>
              <Option value="medium">$50 - $200</Option>
              <Option value="high">$200+</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">
                Number of people or guest{" "}
                <span className="text-gray-400 text-xs italic font-normal">
                  (If Applicable)
                </span>
              </span>
            }
            name="people"
          >
            <Input placeholder="2 people" className="h-10!" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">Your name</span>
            }
            name="name"
          >
            <Input placeholder="Name" className="h-10!" />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label={
                <span className="text-[#055E6E] font-medium">
                  Email address
                </span>
              }
              name="email"
            >
              <Input placeholder="example.email@gmail.com" className="h-10!" />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-[#055E6E] font-medium text-nowrap">
                  Phone Number{" "}
                  <span className="text-gray-400 text-[8px] lg:text-xs italic font-normal">
                    (Optional)
                  </span>
                </span>
              }
              name="phone"
            >
              <Input placeholder="123456778910" className="h-10!" />
            </Form.Item>
          </div>

          <Form.Item className="mb-0 flex-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full md:w-sm h-11! bg-[#FFC221]! hover:bg-[#ffcd4d]! text-[#292929]! border-none! text-lg font-medium! rounded-lg mt-4"
            >
              Get Proposals
            </Button>
          </Form.Item>

          <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed ">
            You can update details or respond later providers may ask questions
            before confirming availability
          </p>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};
