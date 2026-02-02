"use client";
import { Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { PiImageThin } from "react-icons/pi";

const ServiceModal = ({
  open,
  setOpen,
  serviceData,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  serviceData: any;
}) => {
  const [form] = Form.useForm();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>();

  // console.log(imgFile);

  useEffect(() => {
    if (serviceData) {
      form.setFieldsValue(serviceData);
      setImageUrl(serviceData.image);
    }
  }, [serviceData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const serviceCategories = [
    {
      label: "Home, Domestic & Professional Cleaning Services",
      value: "Cleaning",
    },
  ];

  const subCategories = [
    { label: "Domestic Cleaning", value: "Domestic Cleaning" },
    {
      label: "Professional / Commercial Cleaning",
      value: "Professional / Commercial",
    },
    { label: "Deep Cleaning", value: "Deep Cleaning" },
    {
      label: "Post-Construction Cleaning",
      value: "Post-Construction Cleaning",
    },
    { label: "Gardening", value: "Gardening" },
    { label: "Laundry & Ironing", value: "Laundry & Ironing" },
  ];

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered
      width={600}
      title={
        <h2 className="text-2xl font-semibold text-[#242424] pb-4">
          {serviceData?.id ? "Edit Service" : "Add Service"}
        </h2>
      }
    >
      <div className="">
        <Form onFinish={onFinish} layout="vertical">
          <div className="mb-4 w-full">
            <p className="text-[14px] font-semibold py-1">Service Image</p>
            <label
              htmlFor="image"
              className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block"
            >
              <div className="flex justify-center items-center w-full h-40 ">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    style={{
                      height: "160px",
                      width: "230px",
                      borderRadius: 10,
                      objectFit: "contain",
                    }}
                    alt="class"
                  />
                ) : (
                  <PiImageThin className="text-8xl text-[#66666650]" />
                )}
              </div>
            </label>
            <div className="hidden">
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className=" hidden"
              />
            </div>
          </div>

          <Form.Item
            label={
              <p className="text-[#6C6C6C] font-medium">
                Select service category
              </p>
            }
            name="serviceCategory"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select
              placeholder="Select category"
              className="h-10"
              style={{ height: "40px" }}
            >
              {serviceCategories.map((category) => (
                <Select.Option key={category.value} value={category.value}>
                  {category.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <p className="text-[#6C6C6C] font-medium">Select Sub-category</p>
            }
            name="subCategory"
            rules={[
              { required: true, message: "Please select a sub-category" },
            ]}
          >
            <Select
              placeholder="Select Sub-category"
              className="h-10"
              style={{ height: "40px" }}
            >
              {subCategories.map((category) => (
                <Select.Option key={category.value} value={category.value}>
                  {category.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label={
              <p className="text-[#525252] text-sm font-medium ">Description</p>
            }
          >
            <Input.TextArea
              rows={5}
              id="description"
              name="description"
              defaultValue={serviceData?.description}
            />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-8.5 py-3.5 font-medium rounded-lg"
            >
              {serviceData?.id ? "Edit Service" : "Add Service"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
export default ServiceModal;
