import { Form, Input } from "antd";

const ChangePassword = () => { 
        const [form] = Form.useForm(); 
       
        const handleChangePassword = (values: any) => {
            console.log(values);
        };
    return (
        <div className="ps-2.5">
            <h2 className="text-[#525252] text-[16px] lg:text-lg font-medium  mb-5">Change Password</h2> 
              <Form
                form={form}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={handleChangePassword}
                className="w-full "
            >
                  <Form.Item
                    label={
                        <label  className="block text-[#525252] text-sm font-medium">
                            Current Password
                        </label>
                    }
                    name="currentPassword"
                    rules={[{ required: true, message: 'Please input Current password!' }]}
                >
                    <Input.Password  className=" h-[45px]" />
                </Form.Item>
                <Form.Item
                    label={
                        <label className="block text-[#525252] text-sm font-medium">
                            New Password
                        </label>
                    }
                    name="newPassword"
                    dependencies={['currentPassword']}
                    rules={[
                      {
                        required: true, 
                        message: "Please input your New password!",
                      }, 
                      {
                        min: 8,
                        message: "Password must be at least 8 characters long!",
                    },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('currentPassword') === value) {
                            return Promise.reject(new Error('The New password is similar to the current Password'));
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                >
                    <Input.Password  className="h-[45px]" />
                </Form.Item>

                <Form.Item
                    label={
                        <label className="block text-[#525252] text-sm font-medium">
                            Confirm Password
                        </label>
                    }
                    name="confirmPassword"
                    dependencies={['newPassword']}
                    rules={[
                      {
                        required: true, 
                        message: "Please input your Confirm password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                      }),
                    ]}
                >
                    <Input.Password  className="h-[45px]" />
                </Form.Item>

                <Form.Item className="pt-6 flex justify-end" >
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

export default ChangePassword;