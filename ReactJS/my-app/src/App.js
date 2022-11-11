import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import AddComponent from "./AddComponent";
import Info from "./components/Info";
import List from "./components/List";
import Example from "./components/Example";

function App() {
  // const url_error =
  //   "https://image.shutterstock.com/image-vector/error-500-page-empty-symbol-260nw-1711106146.jpg";
  // const data = [
  //   {
  //     id: 1,
  //     name: "dung1",
  //     age: 1,
  //     arrvalue: [1, 3, 4, 5],
  //   },
  //   {
  //     id: 2,
  //     name: "dung2",
  //     age: 3,
  //     arrvalue: [2, 4, 6, 7, 8],
  //   },
  //   {
  //     id: 3,
  //     name: "Cuong",
  //     age: 4,
  //     arrvalue: [4, 6, 7, 8],
  //   },
  // ];

  const handleClick = () => {
    setCount(count + 1);
  };

  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Callback re-called");
    // setCount(count + 1);
  }, [count]);

  console.log("re-render");
  return (
    <div className="App">
      {/* <Example /> */}
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
      {/* <Info data={data} /> */}
      {/* <List data={data} url_error={url_error} /> */}
    </div>
  );
}

export default App;
