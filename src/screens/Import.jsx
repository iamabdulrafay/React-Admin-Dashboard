import React, { useState } from "react";
import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import axios from "axios";

const { TextArea } = Input;

const Import = () => {
  const [formData, setFormData] = useState({
    name: "",
    office: "",
    position: "",
    startDate: null,
    age: "",
    sallary: "",
    // description: "",
  });
  const [dangerAlert, setDangerAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const Postmethod = async (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.office &&
      formData.position &&
      formData.startDate &&
      formData.age &&
      formData.sallary
    ) {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/UserInformations",
          formData,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        console.log("data", data);
        setDangerAlert(false);
        setSuccessAlert(true);
        // Clear the form fields after successful submission
        setFormData({
          name: "",
          office: "",
          position: "",
          startDate: null,
          age: "",
          sallary: null,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setDangerAlert(true);
      setSuccessAlert(false);
    }
  };

  return (
    <div className="bg-white w-[40vw] h-auto mx-auto mt-10 py-4">
      {successAlert && (
        <Alert
          message="Successful"
          description="Your information has been saved successfully."
          type="success"
          showIcon
          closable
        />
      )}
      {dangerAlert && (
        <Alert
          message="Error"
          description="Please fill in all the information."
          type="error"
          showIcon
          closable
        />
      )}
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "default" }}
        onValuesChange={handleFormChange}
        style={{ maxWidth: 600 }}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Office" name="office">
          <Input />
        </Form.Item>
        <Form.Item label="Position" name="position">
          <Input />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Salary" name="sallary">
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <Button
            type="primary"
            onClick={Postmethod}
            className="bg-slate-950 "
            htmlType="button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Import;
