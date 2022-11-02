import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Category from "./components/Practice3/Category";
import Product from "./components/Practice3/Product";

function App() {
  return (
    <div className="App">
      <p>
        <Link to="category">Category</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default App;
