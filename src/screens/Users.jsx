import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DataShownTable from "../components/DataShownTable";

const Users = () => {
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

  const Postmethod = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/UserInformations",
        data: JSON.stringify(fieldsChange), // No need to stringify
      });
      // Update the state with the new user data
      setTotalUserData([...totalUserData, data]);

      console.log(totalUserData);
      // Clear the form fields after successful submission
      setFieldsChange({
        Name: "",
        Position: "",
        Office: "",
        Age: "",
        Start_date: "",
        Salary: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   const navigate = useNavigate();
  // Define the state variable and setter function for disabled
  // const [totalUserData, setTotalUserData] = useState([]);
  // const [fieldsChange, setFieldsChange] = useState({
  //   Name: "",
  //   Position: "",
  //   Office: "",
  //   Age: "",
  //   Start_date: "",
  //   Salary: "",
  // });

  // const onUserFieldsChange = (e) => {
  //   setFieldsChange({
  //     ...fieldsChange,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // console.log(fieldsChange);
  // const totalUserApiData = async () => {
  //   try {
  //     const { data } = await axios({
  //       url: "http://localhost:3000/UserInformations   ",
  //       method: "GET",
  //     });
  //     setTotalUserData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   totalUserApiData();
  // }, []);

  // console.log("total", totalUserData);
  // const totalUserApiDataDelete = async (id) => {
  //   try {
  //     const { data } = await axios({
  //       method: "DELETE",
  //       url: `http://localhost:3000/UserInformations/${id}`,
  //     });

  //     setTotalUserData((prevData) =>
  //       prevData.filter((booking) => booking.id !== id)
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   totalUserApiDataDelete();
  // }, []);

  // console.log("totalDelee", totalUserData);
  // const Postmethod = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios({
  //       method: "POST",
  //       url: "http://localhost:3000/UserInformations",
  //       data: JSON.stringify(fieldsChange), // No need to stringify
  //     });
  //     // Update the state with the new user data
  //     setTotalUserData([...totalUserData, data]);

  //     console.log(totalUserData);
  //     // Clear the form fields after successful submission
  //     setFieldsChange({
  //       Name: "",
  //       Position: "",
  //       Office: "",
  //       Age: "",
  //       Start_date: "",
  //       Salary: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Event handler for updating the disabled state
  //   const handleUpdate = () => {
  //     navigate("/updateform");
  //   };

  // Event handler for updating the fieldsChange state

  return (
    <>
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DataShownTable
          title="Name"
          company="Office"
          date="Date"
          amount="Sallary"
          position="Position"
          age="Age"
          // url="https://api.jsonbin.io/v3/b/65deee32266cfc3fde907313"
          url="https://api.jsonbin.io/v3/b/65deee32266cfc3fde907313"></DataShownTable>
      </div>
    </>
  );
};

export default Users;
