import { Modal } from "antd";

const SwitchRoleConfirmModal = ({
  open,
  onConfirm,
  onCancel,
  loading = false,
}: any) => {
  return (
    <Modal
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Yes, Switch"
      cancelText="Cancel"
      confirmLoading={loading}
      centered
      title="Confirm Role Switch"
    >
      <p className="text-gray-600">
        Are you sure you want to switch to the <strong>Customer</strong> role?
        You can switch back anytime.
      </p>
    </Modal>
  );
};

export default SwitchRoleConfirmModal;
