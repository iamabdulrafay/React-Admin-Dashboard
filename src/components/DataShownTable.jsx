import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppstoreAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { Alert, Modal, Skeleton, Spin } from "antd";
import UpdateForm from "./UpdateForm";
import { useDispatch, useSelector } from "react-redux";
import { apiFetching } from "../features/AsyncApiSelice";
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
  const [ApiHeading, setApiHeading] = useState({});
  const [clickId, setClickId] = useState({});
  const [fieldsChange, setFieldsChange] = useState({
    Name: "",
    Position: "",
    Office: "",
    Age: "",
    Start_date: "",
    Salary: "",
  });

  const onUserFieldsChange = (e) => {
    setFieldsChange({
      ...fieldsChange,
      [e.target.name]: e.target.value,
    });
  };
  console.log(fieldsChange);
  const totalUserApiData = async () => {
    try {
      const { data } = await axios({
        url: url,
        method: "GET",
      });
      //   setTotalUserData(data);
      if (data.record.UserInformations) {
        setTotalUserData(data.record.UserInformations);
      } else if (data.record.ProductPage) {
        setTotalUserData(data.record.ProductPage);
      } else {
        // Handle other cases or set default data
        setTotalUserData(defaultData);
      }
      console.log(data, "datashwom");
      setApiHeading(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalUserApiData();
  }, []);

  // console.log("total", totalUserData.products);

  const totalUserApiDataDelete = async (id) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `${url}/${id}`,
      });

      setTotalUserData((prevData) =>
        prevData.filter((booking) => booking.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log("totalDelee", totalUserData.id);

  // new logic of update

  // not working bcuase of json publsisihng
  // const handleModal = (id) => {
  //   setClickId(id);
  //   setModal(true);
  //   try {
  //   } catch (error) {}
  // };

  return (
    <>
      {" "}
      <div className=" lg:block lg:xl  flex  lg:h-auto items-center justify-center h-[100vh]   ">
        <div className="bg-white mx-auto  w-[75vw] lg:w-auto  lg:px-4    ">
          {totalUserData.some((product) => product.age) && (
            <Link
              state={{
                state: { totalUserData: totalUserData, ApiHeading: ApiHeading },
              }}
              to="/import"
              className="text-blue-800 flex ">
              ADD↑
            </Link>
          )}
          <table id="example" className="table-auto mt-5   w-full">
            <thead>
              <tr className=" lg:text-[1.3vw] text-[1vw]">
                <th className="lg:px-4 px-1 py-2">{title}</th>
                <th className="lg:px-4 px-1 py-2">{company}</th>
                <th className="lg:px-4 px-1 py-2">{color || position}</th>
                <th className="lg:px-4 px-1 py-2">{instock || age}</th>
                <th className="lg:px-4 px-1 py-2">{date}</th>
                <th className="lg:px-4 px-1 py-2">{amount}</th>
                <th className="lg:px-4 px-1 py-2">Actions</th>
                {totalUserData.some((product) => product.price) && (
                  <th className="lg:px-4 px-1 py-2">details</th>
                )}{" "}
              </tr>
            </thead>
            <tbody className=" lg:text-[1.3vw] text-[1.5vw]">
              {totalUserData.map((e) => (
                <tr key={e.id}>
                  <td className=" lg:px-4 px-1 py-2 ">
                    <h1>{e.name || e.title}</h1>
                  </td>
                  <td className=" lg:px-4 px-1 py-2">
                    {e.position || e.producer}
                  </td>
                  <td className=" lg:px-4 px-1 py-2">{e.office || e.color}</td>
                  <td className=" lg:px-4 px-1 py-2">{e.age || e.inStock}</td>
                  <td className=" lg:px-4 px-1 py-2">
                    {e.startDate || e.createdAt}
                  </td>
                  <td className=" lg:px-4 px-1 py-2">{e.salary || e.price}</td>

                  <td className="text-white lg:px-4 px-1 py-2 flex gap-2">
                    <AppstoreAddOutlined
                      onClick={() => handleModal(e.id)}
                      className="text-slate-950 lg:text-2xl  text-[1.2]"
                    />

                    <DeleteOutlined
                      className="text-red-600 lg:text-2xl  text-[1.2] "
                      onClick={() => totalUserApiDataDelete(e.id)}
                    />
                  </td>
                  <td>
                    {" "}
                    {totalUserData.some((product) => product.price) && (
                      <Link
                        state={{
                          state: {
                            totalUserData: totalUserData,
                            ApiHeading: ApiHeading,
                          },
                        }}
                        to={`/product/${e.id}`}
                        className="text-blue-800 flex ">
                        details
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modal && <UpdateForm id={clickId}></UpdateForm>}
      </div>
    </>
  );
};

export default DataShownTable;
