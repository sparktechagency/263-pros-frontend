"use client";
import ProviderProfile from "@/feature/main-layout/profile/settings/components/ProviderProfile";
import { Col, Form, Input, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { myFetch } from "../../../helpers/myFetch";
import getProfile from "../../../helpers/getProfile";
import TextArea from "antd/es/input/TextArea";
import ProviderForm from "@/feature/main-layout/profile/settings/components/ProviderForm";

export default function RegisterProviderForm({
  open,
  onCancel,
}: {
  open: boolean;
  onCancel: () => void;
}) {
  const router = useRouter();
  const [form] = Form.useForm();
  const [user, setUser] = React.useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

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
    if (!user) return;
    form.setFieldsValue({
      phoneNumber: user?.contact,
      email: user?.email,
    });
  }, [user, form]);

  const onFinish = (values: any) => {
    const formData = new FormData();

    const isBusinessAccount = {
      businessName: values.businessName,
      location: values.location,
      category: values.category,
      service: values.service,
      businessContact: values.phoneNumber,
      officeAddress: values.officeAddress,
      website: values.website,
      SocialMedia: {
        whatsapp: values.whatsapp,
        instagram: values.instagram,
        facebook: values.facebook,
      },
    }
    formData.append("name", user?.name || "");
    formData.append("about", user?.about || "");
    formData.append("isBusinessAccount", JSON.stringify(isBusinessAccount));

    // Object.entries(isBusinessAccount).forEach(([key, value]) => {
    //   if (value !== undefined && value !== null) {
    //     formData.append(key, value);
    //   }
    // });

    if (values.businessImage?.length) {
      values.businessImage.forEach((file: any) => {
        if (file.originFileObj) {
          formData.append("businessImage", file.originFileObj);
        }
      });
    }
    handleSubmit?.(formData);
  };
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await myFetch("/service", {
          method: "GET",
          cache: "no-store",
          tags: ["service"],
        });

        setServices(res?.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (formData: any) => {
    try {
      const res = await myFetch("/user", {
        method: "PATCH",
        body: formData,
      });
      if (res?.success) {
        toast.success(res?.message || "profile-update successfully", { id: "profile-update" });
        Cookies.set("accessToken", res?.data?.accessToken);
        router.refresh();
        onCancel();
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

    // if (!user) return;
    // if (userRole === "provider") {
    //   toast.error("You are already a provider");
    //   return;
    // } else if (userRole === "customer") {
    //   Cookies.set("user", JSON.stringify({ ...user, role: "provider" }));
    //   toast.success("Provider registered successfully");
    //   router.refresh();
    //   onCancel();
    //   return;
    // }
    // onCancel();
  };
  return (
    <Modal
      centered
      title={null}
      open={open}
      onCancel={onCancel}
      footer={null}
      width={600}
      className="h-[80vh] overflow-auto rounded-lg"
    >
      <h3 className="text-3xl text-primary font-bold text-center">
        263 <span className="text-[#FFCB20]">Pros</span>
      </h3>
      <div className="h-0.5 w-full bg-[#EBEBEB] my-4" />
      <h4 className="text-2xl font-semibold text-center text-primary mb-8">
        Register as a Provider
      </h4>
      <div className="p-2 md:p-4 border border-[#EBEBEB] rounded-xl">
        <ProviderForm onFinish={onFinish} form={form} />
        {/* <ProviderProfile handleSubmit={handleSubmit} />  */}
      </div>
    </Modal>
  );
}
