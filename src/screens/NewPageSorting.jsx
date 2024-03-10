import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NewPageSorting = () => {
  const [datasource, setDatasource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortedInfo, setSortedInfo] = useState({});

  const apidata = async () => {
    try {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // Map the data to match the column keys and add a new key for the body
      const mappedData = data.map((item, index) => ({
        key: index,
        title: item.title,
        userId: item.userId,
        body: item.body,
        id: item.id,
        // Add a new key for the body content
        bodyContent: item.body,
      }));
      setDatasource(mappedData);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    apidata();
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const sortedData = sortedInfo
    ? [...datasource].sort((a, b) =>
        sortedInfo.order === "descend"
          ? b[sortedInfo.field] - a[sortedInfo.field]
          : a[sortedInfo.field] - b[sortedInfo.field]
      )
    : datasource;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Description",
      dataIndex: "bodyContent", // Use the new key for the body content
      key: "body",
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      sorter: true,
    },
  ];

  return (
    <Table
      dataSource={sortedData}
      columns={columns}
      pagination={{
        current: page,
        pageSize: pageSize,
        total: 100,
        onChange: (page, pageSize) => {
          setPageSize(pageSize);
          setPage(page);
        },
      }}
      onChange={handleTableChange}
    />
  );
};

export default NewPageSorting;
