import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Info from "./components/TH3/Info";
import AddComponent from "./components/TH3/AddComponent";
function App() {
  return (
    <>
      <Link to="TH2/info">TH2</Link>
    </>
  );
}

export default App;
