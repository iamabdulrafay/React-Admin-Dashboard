import { Table, Button, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppstoreAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { current } from "@reduxjs/toolkit";
// import UpdateForm from "./UpdateForm";

const DataShownTable = ({
  url,
  title,
  company,
  color,
  instock,
  date,
  amount,
  position,
  age,
}) => {
  const [totalUserData, setTotalUserData] = useState([]);
  const [modal, setModal] = useState(false);
  const [clickData, setClickData] = useState({});
  const [ApiHeading, setApiHeading] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const totalUserApiData = async () => {
    try {
      const { data } = await axios.get(url);
      if (data.record && data.record.ProductPage) {
        setTotalUserData(
          data.record.ProductPage.map((item, index) => ({
            ...item,
            key: `product_${index}`, // Use "product" instead of "user" for ProductPage
          }))
        );
      } else if (data.record && data.record.UserInformations) {
        setTotalUserData(
          data.record.UserInformations.map((item, index) => ({
            ...item,
            key: `user_${index}`,
          }))
        );
        const localData = JSON.parse(localStorage.getItem("users") || "[]");
        const newData = localData.filter((item) =>
          totalUserData.every((user) => user.id !== item.id)
        );
        setTotalUserData((prevData) => [...prevData, ...newData]);
      } else {
        // Handle other cases or set default data
      }
      setApiHeading(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalUserApiData();
  }, []);

  const totalUserApiDataDelete = async (id) => {
    try {
      const localData = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedData = localData.filter((item) => item.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedData));
      setTotalUserData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleModal = (content) => {
    setClickData(content);
    setModal(true);
  };

  const columns = [
    {
      title: title,
      dataIndex: totalUserData[0]?.title ? "title" : "name",
      key: totalUserData[0]?.position ? "title" : "name",
    },
    {
      title: "Company",
      dataIndex: totalUserData[0]?.producer ? "producer" : "office",
      key: totalUserData[0]?.producer ? "producer" : "office",
    },

    {
      title: totalUserData[0]?.position ? "Position" : "Color",
      dataIndex: totalUserData[0]?.position ? "position" : "color",
      key: totalUserData[0]?.position ? "position" : "color",
    },

    {
      title: instock || age,
      dataIndex: totalUserData[0]?.inStock ? "inStock" : "age",
      key: totalUserData[0]?.inStock ? "inStock" : "age",
    },
    {
      title: date,
      dataIndex: totalUserData[0]?.createdAt ? "createdAt" : "startDate",
      key: totalUserData[0]?.createdAt ? "createdAt" : "startDate",
    },
    {
      title: amount,
      dataIndex: totalUserData[0]?.price ? "price" : "salary",
      key: totalUserData[0]?.price ? "price" : "salary",
      sorter: (a, b) => {
        // Extract the amount values from the data objects
        const amountA = a.price || a.salary;
        const amountB = b.price || b.salary;

        // Compare the amounts for sorting
        if (amountA < amountB) {
          return -1; // Indicates "a" comes before "b"
        }
        if (amountA > amountB) {
          return 1; // Indicates "b" comes before "a"
        }
        return 0; // Indicates both are equal
      },
    },
  ];

  // Add "Details" column only if at least one item has the "price" property
  if (totalUserData.some((product) => product.price !== undefined)) {
    columns.push({
      title: "Details",
      key: "details",
      render: (text, record) => (
        <Link to={`/product/${record.id}`} state={{ product: record }}>
          Details
        </Link>
      ),
    });
  }
  if (totalUserData.some((user) => user.age !== undefined)) {
    columns.push({
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          {/* <Button
            type="primary"
            icon={<AppstoreAddOutlined />}
            onClick={() => handleModal(record)}>
            Add
          </Button> */}
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => totalUserApiDataDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    });
  }

  return (
    <>
      <div className=" lg:block flex-wrap flex lg:h-auto items-center justify-center min-h-[100vh] ">
        <div className="container overflow-x-auto mx-auto w-[90vw] lg:w-auto lg:px-4 ">
          <Table
            columns={columns}
            dataSource={totalUserData}
            pagination={{
              current: page,
              pageSize: pageSize,
              onChange: (page, pageSize) => {
                setPageSize(pageSize);
                setPage(page);
              },
            }}
            // responsive={true}
          />
        </div>

        {/* {modal && (
          <UpdateForm data={clickData} state={setTotalUserData}></UpdateForm>
        )} */}
      </div>
    </>
  );
};

export default DataShownTable;
