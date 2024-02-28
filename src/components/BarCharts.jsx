import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { apiFetching } from "../features/AsyncApiSelice";

const BarCharts = ({ url, color }) => {
  const [apiChartData, setApiChartData] = useState([]);

  // rtk

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.apiData); // Assuming your slice is named "user"

  useEffect(() => {
    dispatch(apiFetching(url));
  }, [dispatch]);

  useEffect(() => {
    if (user && user.record && user.record.barChartBoxRevenue) {
      setApiChartData(user.record.barChartBoxRevenue.chartData);
    }
    if (user && user.record && user.record.barChartBoxVisit) {
      setApiChartData(user.record.barChartBoxRevenue.barChartBoxVisit);
    }
  }, [user]);

  return (
    <div className="barChartBox">
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={apiChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="profit" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
