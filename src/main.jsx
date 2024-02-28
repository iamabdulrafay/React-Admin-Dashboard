import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Users from "./screens/Users.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import Home from "./screens/Home.jsx";
import Product from "./screens/Product.jsx";
import Import from "./screens/Import.jsx";
import ProductDetails from "./screens/ProductDetails.jsx";
import CalendarSchedule from "./screens/CalendarSchedule.jsx";
import TextEditor from "./screens/TextEditor.jsx";
import Login from "./screens/Login.jsx";

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/users" element={<Users />} />
      <Route path="/updateform" element={<UpdateForm />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/import" element={<Import />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/schedule" element={<CalendarSchedule />} />
      <Route path="/editor" element={<TextEditor />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
