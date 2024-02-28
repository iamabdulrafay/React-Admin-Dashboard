import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarsOutlined,
  CalendarOutlined,
  FileTextOutlined,
  LoginOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    // <div
    //   onClick={toggleSidebar}
    //   className="flex flex-1 lg:bg-transparent absolute bg-black ">
    <>
      <BarsOutlined
        onClick={toggleSidebar}
        className="none lg:text-slate-950 md:text-slate-950  text-white"
        style={{}}
      />{" "}
      *
      <div
        className={`${
          isSidebarOpen ? "hidden" : ""
        } md:flex md:w-64 md:flex-col  z-30`}>
        <div
          className={`flex flex-col flex-grow pt-5 ${
            isSidebarOpen ? " w-[15vw]" : "w-[70vw]"
          }  overflow-y-auto bg-[#007bff] ${
            isSidebarOpen ? " z-1" : "absolute"
          }  z-30`}>
          <div className="flex items-center flex-shrink-0 px-4 ">
            {/* <img
              className="w-auto h-8"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
              alt=""
            /> */}
            <h1 className="text-black font-extrabold text-xl">
              Admin dashboard
            </h1>
          </div>

          <div className="px-4 mt-8">
            <label for="" className="sr-only">
              {" "}
              Search{" "}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>

              <input
                type="search"
                name=""
                id=""
                className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                placeholder="Search here"
              />
            </div>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
            <div className="space-y-4">
              <nav className="flex-1 space-y-2">
                <Link
                  href="/"
                  title=""
                  className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-slate-950 rounded-lg group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mr-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    // className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </Link>

                <Link
                  to="/users"
                  className="flex  items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-slate-950 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    // className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Users
                </Link>

                <Link
                  to="/schedule"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-slate-950 group">
                  <CalendarOutlined className="flex-shrink-0 w-5 h-5 mr-4" />
                  Calendar
                </Link>

                <Link
                  to="/editor"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-slate-950 group">
                  <FileTextOutlined className="flex-shrink-0 w-5 h-5 mr-4" />
                  Text Editor
                </Link>

                <Link
                  to="/login"
                  className="flex  items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white  hover:text-white rounded-lg hover:bg-slate-950 group">
                  <LoginOutlined className="flex-shrink-0 w-5 h-5 mr-4" />
                  Login
                </Link>
              </nav>

              <hr className="border-gray-200" />

              {/* <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    // className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </nav> */}
            </div>

            <div className="pb-4 mt-20">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt=""
                />
                Abdul Rafay
                <svg
                  className="w-5 h-5 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
          </div>
        </main>
      </div>
    </>
    // </div>
  );
};
export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div>
//       <div className="bg-indigo-700 rounded-r shadow xl:hidden flex justify-between w-full p-6 items-center border-b border-transparent sm:border-gray-200">
//         <button
//           className="flex text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200 justify-between items-center space-x-3"
//           onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <svg
//             width={34}
//             height={34}
//             viewBox="0 0 34 34"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM17 24C19.9174 24 22.7153 22.8411 24.7782 20.7782L23.364 19.364C21.6761 21.0518 19.3869 22 17 22V24ZM24.7782 20.7782C26.8411 18.7153 28 15.9174 28 13H26C26 15.3869 25.0518 17.6761 23.364 19.364L24.7782 20.7782ZM28 13C28 9.08258 26.8411 6.28467 24.7782 4.22183L23.364 5.63604C25.0518 7.32395 26 9.61313 26 13H28ZM24.7782 4.22183C22.7153 2.15893 19.9174 1 17 1V3C19.3869 3 21.6761 3.94821 23.364 5.63604L24.7782 4.22183Z"
//               fill="currentColor"
//             />
//           </svg>
//           <span className="text-lg font-semibold">Menu</span>
//         </button>
//         <div className="flex space-x-4">
//           <button className="text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200">
//             <svg
//               width={24}
//               height={24}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M10.5 1L1 10.5V20.5L10.5 30L20.5 20.5V10.5L10.5 1ZM3 11.9142V18.0858L10.5 25.5858L18 18.0858V11.9142L10.5 4.41421L3 11.9142Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </button>
//           <button className="text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200">
//             <svg
//               width={24}
//               height={24}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M17.5 1L1 17.5V22.5H6H10V18H8V22H4V18V14H8V13V11.5V11H4V7H8V6V3.5V3H4H2V1H4H6H17.5ZM3.91421 16L17 2.91421V16H3.91421ZM18 17H20V21H24V17H22H18Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="flex flex-1 bg-gray-50  ">
//           <div className="hidden md:flex md:w-64 md:flex-col">
//             <div className="flex flex-col flex-grow pt-5 w-[15vw]  overflow-y-auto bg-[#8d88ea]">
//               <div className="flex items-center flex-shrink-0 px-4">
//                 <img
//                   className="w-auto h-8"
//                   src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
//                   alt=""
//                 />
//               </div>

//               <div className="px-4 mt-8">
//                 <label for="" className="sr-only">
//                   Search
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <svg
//                       className="w-5 h-5 text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                     </svg>
//                   </div>

//                   <input
//                     type="search"
//                     name=""
//                     id=""
//                     className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
//                     placeholder="Search here"
//                   />
//                 </div>
//               </div>

//               <div className="px-4 mt-6">
//                 <hr className="border-gray-200" />
//               </div>

//               <div className="flex flex-col flex-1 px-3 mt-6">
//                 <div className="space-y-4">
//                   <nav className="flex-1 space-y-2">
//                     <Link
//                       href="/"
//                       title=""
//                       className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                         />
//                       </svg>
//                       Home
//                     </Link>

//                     <Link
//                       to="/users"
//                       className="flex  items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-indigo-600 group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                       Users
//                     </Link>

//                     <Link
//                       to="/product"
//                       className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-indigo-600 group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                         />
//                       </svg>
//                       Products
//                     </Link>
//                   </nav>

//                   <hr className="border-gray-200" />

//                   <nav className="flex-1 space-y-2">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                         />
//                       </svg>
//                       Products
//                     </a>

//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                         />
//                       </svg>
//                       Orders
//                     </a>

//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                         />
//                       </svg>
//                       Analytics
//                       <svg
//                         className="w-4 h-6 ml-auto text-gray-400 group-hover:text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </a>
//                   </nav>

//                   <hr className="border-gray-200" />

//                   <nav className="flex-1 space-y-2">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 mr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                       Settings
//                     </a>
//                   </nav>
//                 </div>

//                 <div className="pb-4 mt-20">
//                   <button
//                     type="button"
//                     className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
//                     <img
//                       className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
//                       src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
//                       alt=""
//                     />
//                     Jacob Jones
//                     <svg
//                       className="w-5 h-5 ml-auto"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col flex-1">
//             <main>
//               <div className="py-6">
//                 <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//       {sidebarOpen && (
//         <div className="bg-indigo-700 shadow-xl absolute top-0 left-0 h-screen w-64 py-6 px-4">
//           <button
//             className="text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200"
//             onClick={() => setSidebarOpen(false)}>
//             <svg
//               width={24}
//               height={24}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M3.70711 2.29289C3.31658 2.68342 3.31658 3.31658 3.70711 3.70711L20.7071 20.7071C21.0976 21.0976 21.7308 21.0976 22.1213 20.7071C22.5118 20.3166 22.5118 19.6834 22.1213 19.2929L5.12132 2.29289C4.7308 1.90237 4.09763 1.90237 3.70711 2.29289Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M2.29289 20.7071C1.90237 20.3166 1.90237 19.6834 2.29289 19.2929L19.2929 2.29289C19.6834 1.90237 20.3166 1.90237 20.7071 2.29289C21.0976 2.68342 21.0976 3.31658 20.7071 3.70711L3.70711 20.7071C3.31658 21.0976 2.68342 21.0976 2.29289 20.7071Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </button>
//           <div className="flex flex-1 bg-gray-50  ">
//             <div className="hidden md:flex md:w-64 md:flex-col">
//               <div className="flex flex-col flex-grow pt-5 w-[15vw]  overflow-y-auto bg-[#8d88ea]">
//                 <div className="flex items-center flex-shrink-0 px-4">
//                   <img
//                     className="w-auto h-8"
//                     src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
//                     alt=""
//                   />
//                 </div>

//                 <div className="px-4 mt-8">
//                   <label for="" className="sr-only">
//                     Search
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                       <svg
//                         className="w-5 h-5 text-gray-400"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                       </svg>
//                     </div>

//                     <input
//                       type="search"
//                       name=""
//                       id=""
//                       className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
//                       placeholder="Search here"
//                     />
//                   </div>
//                 </div>

//                 <div className="px-4 mt-6">
//                   <hr className="border-gray-200" />
//                 </div>

//                 <div className="flex flex-col flex-1 px-3 mt-6">
//                   <div className="space-y-4">
//                     <nav className="flex-1 space-y-2">
//                       <Link
//                         href="/"
//                         title=""
//                         className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                           />
//                         </svg>
//                         Home
//                       </Link>

//                       <Link
//                         to="/users"
//                         className="flex  items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-indigo-600 group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                         Users
//                       </Link>

//                       <Link
//                         to="/product"
//                         className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white hover:text-white rounded-lg hover:bg-indigo-600 group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                           />
//                         </svg>
//                         Products
//                       </Link>
//                     </nav>

//                     <hr className="border-gray-200" />

//                     <nav className="flex-1 space-y-2">
//                       <a
//                         href="#"
//                         className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                           />
//                         </svg>
//                         Products
//                       </a>

//                       <a
//                         href="#"
//                         className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                           />
//                         </svg>
//                         Orders
//                       </a>

//                       <a
//                         href="#"
//                         className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                           />
//                         </svg>
//                         Analytics
//                         <svg
//                           className="w-4 h-6 ml-auto text-gray-400 group-hover:text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </a>
//                     </nav>

//                     <hr className="border-gray-200" />

//                     <nav className="flex-1 space-y-2">
//                       <a
//                         href="#"
//                         className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                         <svg
//                           className="flex-shrink-0 w-5 h-5 mr-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                         Settings
//                       </a>
//                     </nav>
//                   </div>

//                   <div className="pb-4 mt-20">
//                     <button
//                       type="button"
//                       className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
//                       <img
//                         className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
//                         src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
//                         alt=""
//                       />
//                       Jacob Jones
//                       <svg
//                         className="w-5 h-5 ml-auto"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col flex-1">
//               <main>
//                 <div className="py-6">
//                   <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
//                 </div>
//               </main>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
