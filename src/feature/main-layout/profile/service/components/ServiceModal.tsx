"use client";
import { Form, Input, Modal } from "antd";
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

  console.log(imgFile);

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
              <div className="flex justify-center items-center w-full h-[160px] ">
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
            name="title"
            label={<p className="text-[#525252] text-sm font-medium ">Title</p>}
          >
            <Input
              type="text"
              id="title"
              name="title"
              defaultValue={serviceData?.title}
              className=" h-[45px]"
            />
          </Form.Item>

          <Form.Item
            name="category"
            label={
              <p className="text-[#525252] text-sm font-medium ">Category</p>
            }
          >
            <Input
              type="text"
              id="category"
              name="category"
              defaultValue={serviceData?.category}
              className=" h-[45px]"
            />
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
