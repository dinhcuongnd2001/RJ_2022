import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Practice3/Category";
import Product from "./components/Practice3/Product";
// import Login from "../../home/src/components/B1/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <App></App> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<h1>No thing in here</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
