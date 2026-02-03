import React from 'react';
import { Col, Form, Input, Row, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from 'antd/es/input/TextArea';

const ProviderForm = ({ form, onFinish }: { form: any, onFinish: any }) => {
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                className="w-full"
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Profile Details
                </h2>

                {/* ---- Upload Business Images ---- */}
                <Form.Item
                    label="Business Photos"
                    name="businessImage"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e?.fileList}
                >
                    <Upload
                        multiple
                        listType="picture-card"
                        beforeUpload={() => false}
                    >
                        <div>
                            <UploadOutlined />
                            <div className="mt-1">Upload</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Business Name"
                            name="businessName"
                            rules={[{ required: true }]}
                        >
                            <Input className="h-10" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item label="Location" name="location" rules={[{ required: true }]}>
                            <Input className="h-10" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name={"about"}
                    label={
                        <p className="block text-[#525252] text-sm font-medium ">About</p>
                    }
                >
                    <TextArea
                        rows={5}
                        className="w-full "
                    />
                </Form.Item>
                {/* <Form.Item
        label={<p className="text-[#6C6C6C] font-medium"> Select  Category </p>}
        name="category"
        rules={[{ required: true, message: "Please select a category" }]} >
        <Select placeholder="Select category" className="h-10" style={{ height: "40px" }} >
          {
            services.map((service) => (
              <Select.Option key={service.id} value={service.id}>{service.name}</Select.Option>
            ))
          }
        </Select>
      </Form.Item>

      <Form.Item
        label={<p className="text-[#6C6C6C] font-medium"> Select Service </p>}
        name="service"
        rules={[{ required: true, message: "Please select at least one Service" },]}
      >
        <Select
          mode="multiple"
          placeholder="Select service"
          className="h-10"
          optionFilterProp="label"
        >
          {services?.map((category: any) => (
            <Select.OptGroup key={category.id} label={category.name}
            >
              {category.services?.map((service: any) => (
                <Select.Option
                  key={service.id}
                  value={service.id}
                  label={service.title}
                >
                  {service.title}
                </Select.Option>
              ))}
            </Select.OptGroup>
          ))}
        </Select>
      </Form.Item> */}

                <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
                    Contact
                </h2>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item name="phoneNumber" label="Phone number" rules={[{ required: true }]}>
                            <Input className="h-10" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item name="officeAddress" label="Office address" rules={[{ required: true }]}>
                            <Input className="h-10" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name="email" label="Email" rules={[{ type: "email", required: true }]}>
                    <Input className="h-10" readOnly />
                </Form.Item>

                <Form.Item name="website" label="Website">
                    <Input className="h-10" />
                </Form.Item>

                <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
                    Social Media
                </h2>

                <Form.Item name="whatsapp" label="Whatsapp">
                    <Input className="h-10" />
                </Form.Item>

                <Form.Item name="instagram" label="Instagram">
                    <Input className="h-10" />
                </Form.Item>

                <Form.Item name="facebook" label="Facebook">
                    <Input className="h-10" />
                </Form.Item>

                <Form.Item className="pt-6 flex justify-end">
                    <button type="submit" className="bg-[#055e6e] text-white py-3 px-8 rounded-lg" >
                        Save Changes
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProviderForm;