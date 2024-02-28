import React, { useEffect } from "react";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { apiFetching } from "./features/AsyncApiSelice";

const App = () => {
  return (
    <>
      <div className="w-full  flex   bg-slate-950 overflow-x-hidden overflow-y-hidden justify-between">
        <div className="left w-[10vw] ">
          <Navbar></Navbar>
        </div>
        <div className="right w-[80vw] ">
          <Outlet></Outlet>
        </div>
        <div className=""></div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
