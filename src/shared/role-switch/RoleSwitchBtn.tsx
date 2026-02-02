import { useState } from "react";
import { Button } from "antd";
import SwitchRoleConfirmModal from "./SwitchRoleConfirmModal";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { myFetch } from "../../../helpers/myFetch";

const RoleSwitch = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleConfirm = async () => {
    // setLoading(true);
    const role = { role: "USER" };
    try {
      const res = await myFetch("/auth/role-update", {
        method: "PATCH",
        body: role,
      });
      if (res?.success) {
        toast.success(res?.message || "Switched to Customer successfully", { id: "profile-update" });
        Cookies.set("accessToken", res?.data?.accessToken); 
        router.replace("/profile");
        router.refresh();
        setLoading(false);
        setModalVisible(false);
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

    // Cookies.set("user", JSON.stringify({ ...user, role: "customer" }));

  };

  return (
    <>
      <Button
        onClick={() => setModalVisible(true)}
        type="primary"
        size="large"
        className="bg-primary! text-white! font-medium!"
      >
        Switch to Customer
      </Button>

      <SwitchRoleConfirmModal
        open={modalVisible}
        loading={loading}
        onConfirm={handleConfirm}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
};

export default RoleSwitch;
