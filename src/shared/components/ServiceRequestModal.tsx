"use client";

import React, { useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  ConfigProvider,
  Radio,
} from "antd";
import { myFetch } from "../../../helpers/myFetch";
import { toast } from "sonner";
import getProfile from "../../../helpers/getProfile";

const { TextArea } = Input;
const { Option } = Select;

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceId: number;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  serviceName,
  serviceId,
}) => {
  const [form] = Form.useForm(); 
  const [user, setUser] = React.useState<any>(null);

    useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setUser(profileData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);  

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, form]);

  const onFinish = async (values: any) => {
    const formattedValues = {
      serviceId: serviceId,
      ...values,
      date: values.date ? values.date.toISOString() : null,
      numberOfPeople: values.numberOfPeople
        ? Number(values.numberOfPeople)
        : null,
    };
    console.log("Form values:", formattedValues);

    try {
      const res = await myFetch("/service-booking", {
        method: "POST",
        body: formattedValues,
      });
      if (res?.success) {
        toast.success(
          `${res?.message}. Go to my requests to track your request`,
          { id: "service" },
        );
        form.resetFields();
        onClose();
      } else {
        if (res?.error && Array.isArray(res.error)) {
          res.error.forEach((err: { message: string }) => {
            toast.error(err.message, { id: "service" });
          });
        } else {
          toast.error(res?.message || "Something went wrong!", {
            id: "service",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
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
            rules={[{ required: true, message: "Please select a service" }]}
            label={<span className="text-[#055E6E] font-medium">Service</span>}
            name="service"
            rules={[{ required: true, message: "Please enter service name" }]}
          >
            <Input disabled placeholder="Service name" className="h-10!" />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#055E6E] font-medium">Location</span>}
            name="location"
            rules={[{ required: true, message: "Please enter location" }]}
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
            name="urgency"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Radio.Group className="flex gap-8">
              <Radio value={true}>Yes, this is urgent</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">
                Service details
              </span>
            }
            name="serviceDetails"
            rules={[{ required: true, message: "Please enter service details" }]}
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
            name="budgetRange"
          >
            <Select placeholder="Not sure yet" className="h-10!">
              <Option value="notsure">Not sure yet</Option>
              <Option value="10-50">$10 - $50</Option>
              <Option value="50-200">$50 - $200</Option>
              <Option value="200+">$200+</Option>
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
            name="numberOfPeople"
          >
            <Input type="number" placeholder="2 people" className="h-10!" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#055E6E] font-medium">Your name</span>
            }
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Name" className="h-10!" readOnly />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label={
                <span className="text-[#055E6E] font-medium">
                  Email address
                </span>
              }
              name="email"
              rules={[{ required: true, message: "Please enter email" }]}
            >
              <Input placeholder="example.email@gmail.com" className="h-10!"  readOnly/>
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
