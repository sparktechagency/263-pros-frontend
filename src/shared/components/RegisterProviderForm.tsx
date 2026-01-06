import ProviderProfile from "@/feature/main-layout/profile/settings/components/ProviderProfile";
import { Modal } from "antd";
import React from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterProviderForm({
  open,
  onCancel,
}: {
  open: boolean;
  onCancel: () => void;
}) {
  const router = useRouter();
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const userRole = user ? user.role : null;
  const handleSubmit = (values: any) => {
    console.log("register", values);
    if (!user) return;
    if (userRole === "provider") {
      toast.error("You are already a provider");
      return;
    } else if (userRole === "customer") {
      Cookies.set("user", JSON.stringify({ ...user, role: "provider" }));
      toast.success("Provider registered successfully");
      router.refresh();
      onCancel();
      return;
    }
    onCancel();
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
        <ProviderProfile handleSubmit={handleSubmit} />
      </div>
    </Modal>
  );
}
