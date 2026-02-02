"use client";
import { Col, Form, Input, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import getProfile from "../../../../../../helpers/getProfile";
import { imgUrl } from "../../../../../../helpers/imgUrl";
import { myFetch } from "../../../../../../helpers/myFetch";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import TextArea from "antd/es/input/TextArea";
import ProviderForm from "./ProviderForm";

interface userProfile {
  name: string;
  contact: string;
  email: string;
  about: string;
  businessImage: string[];
  isBusinessAccount: {
    businessName: string;
    location: string;
    category: string;
    service: string;
    businessContact: string;
    officeAddress: string;
    website: string;
    SocialMedia: {
      whatsapp: string;
      instagram: string;
      facebook: string;
    };
  }
}
const ProviderProfile = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState<userProfile | null>(null);
  const router = useRouter();

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

    // Convert business images to AntD Upload format
    const businessImageFileList =
      user?.businessImage?.map((img: string, index: number) => ({
        uid: `-${index}`,
        name: img.split("/").pop(),
        status: "done",
        url: img.startsWith("http") ? img : `${imgUrl}${img}`,
      })) || [];

    form.setFieldsValue({
      businessName: user?.isBusinessAccount?.businessName,
      location: user?.isBusinessAccount?.location,
      phoneNumber: user?.contact,
      category: user?.isBusinessAccount?.category,
      service: user?.isBusinessAccount?.service,
      officeAddress: user?.isBusinessAccount?.officeAddress,
      email: user?.email,
      about: user?.about,
      website: user?.isBusinessAccount?.website,
      whatsapp: user?.isBusinessAccount?.SocialMedia?.whatsapp,
      instagram: user?.isBusinessAccount?.SocialMedia?.instagram,
      facebook: user?.isBusinessAccount?.SocialMedia?.facebook,
      businessImage: businessImageFileList,
    });
  }, [user, form]);


  const onFinish = async (values: any) => {
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

    Object.entries(isBusinessAccount).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    if (values.businessImage?.length) {
      values.businessImage.forEach((file: any) => {
        if (file.originFileObj) {
          formData.append("businessImage", file.originFileObj);
        }
      });
    }
    try {
      const res = await myFetch("/user", {
        method: "PATCH",
        body: formData,
      });
      if (res?.success) {
        toast.success(res?.message || "profile-update successfully", { id: "profile-update" });
        Cookies.set("accessToken", res?.data?.accessToken);
        router.refresh();

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
  };

  return (
    <div>
      <ProviderForm onFinish={onFinish} form={form} />
    </div>
  );
};

export default ProviderProfile;
