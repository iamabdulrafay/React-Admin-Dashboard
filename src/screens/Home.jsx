import React from "react";
import TopDealsUser from "../components/TopDealsUser";
import BarCharts from "../components/BarCharts";
import Piecharts from "../components/Piecharts";
import RevenueAnalysis from "../components/RevenueAnalysis";
import ChartInBox from "../components/ChartInBox";

const Home = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:w-[85vw] h-screen py-20 text-white bg-slate-950">
        <div className="left md:flex md:flex-row  md:h-[40vw] lg:h-[80vh] flex-wrap flex-2 gap-2 lg:w-[23vw] mr-4">
          <div className="border lg:mb-0 md:mb-0  mb-5 md:[100vw]">
            <h1 className="text-lg lg:text-[1.5vw] flex-wrap px-5 py-3 font-bold">
              Top deals
            </h1>
            <TopDealsUser />
          </div>
          <div className="h-[30vh] lg:h- md:w-[40vw] border">
            <h1 className="text-lg lg:text-[1.5vw] flex-wrap px-5 py-3 font-bold">
              Total visits
            </h1>
            <BarCharts
              url="https://api.jsonbin.io/v3/b/65dee7af266cfc3fde9070d3"
              color={"#cc5500"}></BarCharts>
          </div>
        </div>
        <div className="middle flex-wrap lg:h-[100vh] mx-auto  lg:w-[20vw]  mb-6 flex-1">
          <div className="lg:h-[45vh] md:h-[60vh] h-screen  md:flex md:flex-row  mb-5 flex  flex-col items-center justify-center gap-3">
            <div className="top ">
              <div className="lg:w-[17vw]  w-[70vw]  md:w-[40vw] mb-3 border flex  flex-wrap h-[22vh]">
                <ChartInBox></ChartInBox>{" "}
              </div>
              <div className="lg:w-[17vw]  w-[70vw] md:w-[40vw] border flex-wrap flex h-[22vh]">
                {" "}
                <div className="left px-5 py-2">
                  <ChartInBox></ChartInBox>{" "}
                </div>
                {/* <div className="right"></div> */}
              </div>
            </div>
            <div className="bottom">
              <div className="lg:w-[17vw]  w-[70vw] md:w-[40vw] mb-3 border h-[22vh]">
                <div className="left px-5 py-2">
                  {" "}
                  <ChartInBox></ChartInBox>{" "}
                </div>
                <div className="right"></div>
              </div>
              <div className="lg:w-[17vw]  w-[70vw] md:w-[40vw]  border h-[22vh]">
                {" "}
                <div className="left px-5 py-2">
                  <ChartInBox></ChartInBox>{" "}
                </div>
                <div className="right"></div>
              </div>
            </div>
          </div>
          <div className="border lg:w-auto    w-[80vw] ">
            <h1 className="text-lg lg:text-[1.5vw] px-5 py-3 font-bold">
              Revenue Analysis
            </h1>
            <RevenueAnalysis></RevenueAnalysis>
          </div>
        </div>
        <div className="right md:flex md:flex-row md:gap-3  md:w-[100vw]    flex-wrap lg:w-[23vw] flex-2 ml-4">
          {" "}
          <div className="lg:h-[52vh] border md:w-[35vw] mb-5">
            <h1 className="text-lg lg:text-[1.5vw] px-5 py-3 font-bold">
              Lead by Source
            </h1>
            <Piecharts></Piecharts>
          </div>
          <div className="h-[30vh] md:w-[35vw] border">
            <h1 className="text-lg lg:text-[1.5vw] px-5 py-3 font-bold">
              Profit Earned
            </h1>
            <BarCharts
              url="https://api.jsonbin.io/v3/b/65dee7af266cfc3fde9070d3"
              color={"#8884d8"}></BarCharts>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
