import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiFetching } from "../features/AsyncApiSelice";

const TopDealsUser = () => {
  const [userData, setUserData] = useState([]);

  const topUser = async () => {
    try {
      const { data } = await axios(
        "https://api.jsonbin.io/v3/b/65def0c4266cfc3fde90740d"
      );
      setUserData(data.record.topDealsUser);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    topUser();
  }, []);
  // const dispatch = useDispatch();
  // const { user, loading, error } = useSelector((state) => state.apiData);
  // // console.log("user", user);
  // useEffect(() => {
  //   dispatch(apiFetching("http://localhost:3000/topDealsUser"));
  // }, [dispatch]);
  // useEffect(() => {
  //   if (user) {
  //     setUserData(user);
  //   }
  // }, [user]);
  // console.log("userData", userData);
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className=" max-w-md  rounded-lg  shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <ul role="list" className="">
              {userData.map((users) => (
                <li className=" ">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={users.img}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate dark:text-white">
                        {users.deals_user}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {users.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                      {users.amount}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDealsUser;
