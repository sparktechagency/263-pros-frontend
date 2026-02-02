"use client";
import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { Divider, Form, Input } from "antd";
import ChangePassword from "./ChangePassword";
import getProfile from "../../../../../../helpers/getProfile";
import { imgUrl } from "../../../../../../helpers/imgUrl";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import { myFetch } from "../../../../../../helpers/myFetch";
interface userProfile {
  name: string;
  email: string;
  contact: string;
  image: string;
  about: string;
}

const CustomerProfileSettings = () => {
  const [form] = Form.useForm();
  const [user, setUser] = React.useState<userProfile | null>(null);
  const [imgURL, setImgURL] = useState("");
  const [imgFile, setImageFile] = useState<File | null>(null); 

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user?.name,
        email: user?.email,
        contact: user?.contact, 
        // about: user?.about,
      });
      setImgURL(user?.image?.startsWith("http") ? user?.image : `${imgUrl}${user?.image}`)
    }
  }, [user, form]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImgURL(imgUrl);
      setImageFile(file)
    }
  };

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

  const onFinish = async (values: { name: string; email: string; contact: string; about: string }) => {
    const formData = new FormData();

    if (imgFile) {
      formData.append("image", imgFile);
    }
    formData.append("name", values?.name);
    // formData.append("email", values?.email);
    formData.append("contact", values?.contact);
    formData.append("about", values?.about);

    try {
      const res = await myFetch("/user", {
        method: "PATCH",
        body: formData,
      });
      if (res?.success) {
        toast.success(res?.message || "profile-update successfully", { id: "profile-update" });
      } else {
        if (res?.error && Array.isArray(res.error)) {
          res.error.forEach((err: { message: string }) => {
            toast.error(err.message, { id: "profile-update" });
          });
        } else {
          toast.error(res?.message || "Something went wrong!", { id: "profile-update" });
        }
      }
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <div className="">
      {/* Left: Avatar Edit */}
      <div className="flex items-center justify-center ">
        <input
          onChange={onChange}
          type="file"
          id="img"
          className="hidden"
        />
        <label
          htmlFor="img"
          className="relative w-40 h-40 mb-2  cursor-pointer rounded-full   bg-cover bg-center border border-primary/10"
          style={{ backgroundImage: `url(${imgURL})` }}
        >
          <div
            className="absolute bottom-1 -right-1 w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center" >
            <Camera size={20} className="text-primary" />
          </div>
        </label>
      </div>

      {/* Right: Form */}
      <div className="mb-2">
        <Form className="" layout="vertical" form={form} onFinish={onFinish}>
          {/* Name */}
          <Form.Item
            name="name"
            label={
              <p className="block text-[#525252] text-sm font-medium ">Name</p>
            }
          >
            <Input
              type="text"
              className="w-full h-[45px]"
            />
          </Form.Item>

          {/* Phonenumber */}
          <Form.Item
            name={"contact"}
            label={
              <p className="block text-[#525252] text-sm font-medium ">
                Contact number
              </p>
            }
          >
            <Input
              type="text"
              className="w-full h-[45px]"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name={"email"}
            label={
              <p className="block text-[#525252] text-sm font-medium ">Email</p>
            }
          >
            <Input
              type="email"
              className="w-full h-[45px]"
              readOnly
            />
          </Form.Item>



          <Form.Item className="pt-6 flex justify-end">
            <button
              type="submit"
              className="bg-[#055e6e] hover:bg-[#044a57] text-white font-medium py-3 px-8 rounded-lg shadow-sm transition-colors"
            >
              Save Changes
            </button>
          </Form.Item>
        </Form>
      </div>

      <Divider />
      <ChangePassword />
    </div>
  );
};

export default CustomerProfileSettings;
