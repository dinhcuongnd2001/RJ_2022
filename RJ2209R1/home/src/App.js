import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>
        <Link to="login">Login</Link>
      </p>
    </div>
  );
}

export default App;
