import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("/");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const validatePassword = (rule, value, callback) => {
    if (value && value.length >= 8) {
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      // Check if password contains at least one uppercase letter
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
    if (!values.username || !values.password) {
      alert("Please fill in all fields!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col h-[100vh] ">
        <Typography style={{ color: "white", fontSize: "3vw" }}>
          {" "}
          LOGIN
        </Typography>
        <div className="bg-white px-20 flex items-center rounded-2xl justify-center h-[70vh] pt-20">
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
            onValuesChange={handleFormChange}
            onFinish={onFinish}
            style={{ maxWidth: 1000 }}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  validator: validatePassword,
                },
              ]}>
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="bg-slate-950" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
