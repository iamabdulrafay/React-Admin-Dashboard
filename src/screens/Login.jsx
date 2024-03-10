import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const validatePassword = (rule, value, callback) => {
    if (value && value.length >= 8) {
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);

      if (!hasSpecialChar || !hasUpperCase) {
        callback(
          "Password must contain at least one special character and one uppercase letter."
        );
      } else {
        callback();
      }
    } else {
      callback("Password must be at least 8 characters long.");
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/");
    if (!values.email || !values.password) {
      alert("Please fill in all fields!");
    }
  };

  return (
    <>
      <div className="min-h-screen  text-gray-900 flex justify-center items-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <Form
                  name="login"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onValuesChange={handleFormChange}
                  style={{ maxWidth: "300px" }}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "Please enter a valid email address!",
                      },
                    ]}>
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      { validator: validatePassword },
                    ]}>
                    <Input.Password placeholder="Password" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full bg-slate-950">
                      Sign In
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <div className="flex-1 w-[20vw] text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp')",
              }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
