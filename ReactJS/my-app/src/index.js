import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Info from "./components/TH3/Info";
import AddComponent from "./components/TH3/AddComponent";
import DataProvider from "./components/DataProvider";
import UpdateComponent from "./components/TH3/UpdateComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/TH2/info" element={<Info />}></Route>
        <Route path="add" element={<AddComponent />} />
        <Route path="update" element={<UpdateComponent />} />
      </Routes>
    </BrowserRouter>
  </DataProvider>
);
reportWebVitals();
