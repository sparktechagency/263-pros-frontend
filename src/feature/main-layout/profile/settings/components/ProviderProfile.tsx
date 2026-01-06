"use client";
import { Col, Form, Input, Row, Select } from "antd";

const ProviderProfile = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="w-full"
      >
        {/* Profile Details Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Profile Details
        </h2>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className="text-[#6C6C6C] font-medium">Business Name</p>
              }
              name="businessName"
              rules={[
                { required: true, message: "Please enter your business name" },
              ]}
              initialValue="Danai Gurira"
            >
              <Input placeholder="Enter business name" className="h-10" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={<p className="text-[#6C6C6C] font-medium">Location</p>}
              name="location"
              rules={[
                { required: true, message: "Please enter your location" },
              ]}
              initialValue="Harare"
            >
              <Input placeholder="Enter location" className="h-10" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label={
            <p className="text-[#6C6C6C] font-medium">
              Select profession category
            </p>
          }
          name="professionCategory"
          rules={[{ required: true, message: "Please select a category" }]}
          initialValue="Weedings"
        >
          <Select
            placeholder="Select category"
            className="h-10"
            style={{ height: "40px" }}
          >
            <Select.Option value="Weedings">Weedings</Select.Option>
            <Select.Option value="Events">Events</Select.Option>
            <Select.Option value="Corporate">Corporate</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <p className="text-[#6C6C6C] font-medium">Select profession</p>
          }
          name="profession"
          rules={[{ required: true, message: "Please select a profession" }]}
          initialValue="Weeding Planner"
        >
          <Select
            placeholder="Select profession"
            className="h-10"
            style={{ height: "40px" }}
          >
            <Select.Option value="Weeding Planner">
              Weeding Planner
            </Select.Option>
            <Select.Option value="Photographer">Photographer</Select.Option>
            <Select.Option value="Caterer">Caterer</Select.Option>
          </Select>
        </Form.Item>

        {/* Contact Section */}
        <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
          Contact
        </h2>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={<p className="text-[#6C6C6C] font-medium">Phone number</p>}
              name="phoneNumber"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
              initialValue="123456789"
            >
              <Input placeholder="Enter phone number" className="h-10" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className="text-[#6C6C6C] font-medium">Office address</p>
              }
              name="officeAddress"
              rules={[
                { required: true, message: "Please enter your office address" },
              ]}
              initialValue="Matura, Zimbabwe"
            >
              <Input placeholder="Enter office address" className="h-10" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label={<p className="text-[#6C6C6C] font-medium">Email</p>}
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
          initialValue="exmample.email@gmail.com"
        >
          <Input placeholder="Enter email address" className="h-10" />
        </Form.Item>

        <Form.Item
          label={<p className="text-[#6C6C6C] font-medium">Website</p>}
          name="website"
          initialValue="website.com"
        >
          <Input placeholder="Enter website URL" className="h-10" />
        </Form.Item>

        {/* Social Media Section */}
        <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
          Social Media
        </h2>

        <Form.Item
          label={<p className="text-[#6C6C6C] font-medium">Whatsapp</p>}
          name="whatsapp"
          initialValue="exmample.link"
        >
          <Input placeholder="Enter Whatsapp link" className="h-10" />
        </Form.Item>

        <Form.Item
          label={<p className="text-[#6C6C6C] font-medium">Instagram</p>}
          name="instagram"
          initialValue="exmample.link"
        >
          <Input placeholder="Enter Instagram link" className="h-10" />
        </Form.Item>

        <Form.Item
          label={<p className="text-[#6C6C6C] font-medium">Facebook</p>}
          name="facebook"
          initialValue="exmample.email@gmail.com"
        >
          <Input placeholder="Enter Facebook link" className="h-10" />
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
  );
};

export default ProviderProfile;
