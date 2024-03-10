import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { apiFetching } from "../features/AsyncApiSelice";

const BarCharts = ({ url, color }) => {
  const [apiChartData, setApiChartData] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.apiData);

  useEffect(() => {
    dispatch(apiFetching(url));
  }, [dispatch, url]);

  useEffect(() => {
    if (
      user &&
      user.record &&
      user.record.barChartBoxRevenue &&
      user.record.barChartBoxRevenue.chartData
    ) {
      setApiChartData(user.record.barChartBoxRevenue.chartData);
    }
  }, [user]);

  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={apiChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="profit" fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
