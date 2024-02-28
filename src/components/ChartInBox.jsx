import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { apiFetching } from "../features/AsyncApiSelice";

const ChartInBox = () => {
  const [totalUserData, setTotalUserData] = useState([]);

  const totalUserApiData = async () => {
    try {
      const { data } = await axios(
        "https://api.jsonbin.io/v3/b/65dee5ec266cfc3fde90702f"
      );
      setTotalUserData(data.record.ChartBoxTotalUsers);
      // console.log("Cahartinbox", data.record.ChartBoxTotalUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalUserApiData();
  }, []);

  // const dispatch = useDispatch();
  // const { user, loading, error } = useSelector((state) => state.apiData);
  // console.log("loading", loading);
  // console.log("user", user);
  // useEffect(() => {
  //   dispatch(apiFetching("http://localhost:3000/ChartBoxTotalUsers"));
  // }, [dispatch]);
  // useEffect(() => {
  //   if (user) {
  //     setTotalUserData(user);
  //   }
  // }, [user]);
  // console.log("chartbox", totalUserData);

  return (
    <div className="flex lg:w-[17vw]  lg:h-[17vh] items-center justify-center py-4 px-5">
      <div className="w-[12vw] h-[10vh]">
        <h1 className="text-xl lg:text-lg font-medium">
          {totalUserData.title}
        </h1>
        <h1 className="text-xl lg:text-lg font-medium">
          {totalUserData.number}
        </h1>
      </div>
      <div className="w-[10vw] h-[10vh]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={totalUserData.chartData}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey={totalUserData.dataKey} // Assuming this is the key for user data
              stroke="#8884d8" // You can set stroke color here
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="texts">
          <span
            className="percentage"
            style={{
              color: totalUserData.percentage < 0 ? "tomato" : "limegreen",
            }}>
            {totalUserData.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartInBox;
