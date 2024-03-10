import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Piecharts = () => {
  const [leadsData, setLeadsData] = useState([]);
  const LeadsBySource = async () => {
    try {
      const { data } = await axios(
        "https://api.jsonbin.io/v3/b/65dee958dc74654018aaf4ef"
      );
      setLeadsData(data.record.barChartBoxLeads);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LeadsBySource();
  }, []);
  console.log("LeadsbySource", leadsData);
  return (
    <>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",

              borderRadius: "5px",
            }}
          />
          <Pie
            data={leadsData}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value">
            {" "}
            {leadsData.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default Piecharts;
