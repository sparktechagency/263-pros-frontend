import { useState } from "react";
import { Button } from "antd";
import SwitchRoleConfirmModal from "./SwitchRoleConfirmModal";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RoleSwitch = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const router = useRouter();
  const handleConfirm = async () => {
    setLoading(true);

    // 🔁 role switch logic here
    // update cookies / api call
    Cookies.set("user", JSON.stringify({ ...user, role: "customer" }));
    toast.success("Switched to Customer successfully");
    router.refresh();
    setLoading(false);
    setModalVisible(false);
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
