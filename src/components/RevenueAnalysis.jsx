import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { apiFetching } from "../features/AsyncApiSelice";

const RevenueAnalysis = () => {
  const [revenueData, setRevenueData] = useState([]);

  const revenueApiData = async () => {
    try {
      const { data } = await axios(
        "https://api.jsonbin.io/v3/b/65dee899dc74654018aaf4a5"
      );

      // we get two thing from api recored and meta data
      setRevenueData(data.record.revenueAnalysis);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    revenueApiData();
  }, []);

  return (
    <div>
      <div className=" h-[30vh]">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueAnalysis;
