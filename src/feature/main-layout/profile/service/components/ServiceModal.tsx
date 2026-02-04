"use client";
import { Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { PiImageThin } from "react-icons/pi";
import { myFetch } from "../../../../../../helpers/myFetch";
import { toast } from "sonner";
import { revalidateTags } from "../../../../../../helpers/revalidateTags";
import { imgUrl } from "../../../../../../helpers/imgUrl";

interface serviceCategory {
  id: string;
  name: string;
  services: { id: string; title: string }[];
}

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
  const [category, setCategory] = useState<serviceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subServices, setSubServices] = useState<any[]>([]);
  const [editingId, setEditingId] = useState(null);
  console.log(serviceData);

  useEffect(() => {
    if (!serviceData?.serviceData || !category.length) return;
    setEditingId(serviceData._id);
    const {
      service,
      category: serviceCategoryObj,
      description,
      image,
    } = serviceData.serviceData;

    form.setFieldsValue({
      category: serviceCategoryObj?._id,
      service: service?._id,
      description: description || "fasfasdfas",
    });
    setSelectedCategory(serviceCategoryObj?._id);

    const foundCategory = category.find(
      (cat) => cat.id === serviceCategoryObj?._id,
    );

    setSubServices(foundCategory?.services || []);

    if (image) {
      setImageUrl(image.startsWith("http") ? image : `${imgUrl}${image}`);
    }
  }, [serviceData, category, form]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await myFetch("/service", {
          method: "GET",
          tags: ["category"],
        });
        setCategory(res?.data || []);
      } catch (error) {
        console.error("Error fetching Category:", error);
      }
    };
    fetchCategory();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    const foundCategory = category?.find((cat) => cat.id === value);
    setSubServices(foundCategory?.services || []);
    form.setFieldsValue({ subCategory: undefined });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const onFinish = async (values: {
    service: string;
    category: string;
    description: string;
  }) => {
    const formData = new FormData();

    const serviceData = {
      service: values.service,
      category: values.category,
      description: values.description,
    };

    formData.append("serviceData", JSON.stringify(serviceData));

    if (imgFile) {
      formData.append("image", imgFile);
    }

    // Debug FormData (correct way)
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    let res;
    try {
      if (editingId) {
        res = await myFetch(`/service-record/${editingId}`, {
          method: "PATCH",
          body: formData,
        });
      } else {
        res = await myFetch("/service-record", {
          method: "POST",
          body: formData,
        });
      }

      if (res?.success) {
        toast.success(res.message, { id: "service" });
        revalidateTags(["service-record"]);
        if (!editingId) {
          form.resetFields();
          setImageUrl(null);
          setImgFile(null);
        }
        setOpen(false);
      } else {
        if (Array.isArray(res?.error)) {
          res.error.forEach((err: { message: string }) =>
            toast.error(err.message, { id: "service" }),
          );
        } else {
          toast.error(res?.message || "Something went wrong!", {
            id: "service",
          });
        }
      }
    } catch (error) {
      console.error("Service create failed:", error);
      toast.error("Server error. Please try again.", { id: "service" });
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        if (!editingId) {
          form.resetFields();
          setImageUrl(null);
          setImgFile(null);
        }
        setOpen(false);
      }}
      footer={null}
      centered
      width={600}
      title={
        <h2 className="text-2xl font-semibold text-[#242424] pb-4">
          {serviceData?._id ? "Edit Service" : "Add Service"}
        </h2>
      }
    >
      <div className="">
        <Form onFinish={onFinish} layout="vertical" form={form}>
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
            label={<p className="text-[#6C6C6C] font-medium">Select Service</p>}
            name="category"
            rules={[{ required: true, message: "Please select a Service" }]}
          >
            <Select
              placeholder="Select service"
              className="h-10"
              style={{ height: "40px" }}
              onChange={handleCategoryChange}
            >
              {category.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <p className="text-[#6C6C6C] font-medium">Select Category</p>
            }
            name="service"
            rules={[{ required: true, message: "Please select a Category" }]}
          >
            <Select
              placeholder="Select Category"
              className="h-10"
              style={{ height: "40px" }}
              disabled={!selectedCategory}
            >
              {subServices.map((service) => (
                <Select.Option key={service.id} value={service.id}>
                  {service.title}
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
              {serviceData?._id ? "Edit Service" : "Add Service"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
export default ServiceModal;
