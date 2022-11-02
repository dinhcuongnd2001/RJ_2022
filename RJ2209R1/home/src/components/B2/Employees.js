import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Employee from "./Employee";
function Home() {
  const { state } = useLocation();
  const [detail, setDetail] = useState(true);
  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];
  const handleClick = () => {
    setDetail(!detail);
  };

  return (
    <div className="container d-column-flex justify-content-center">
      <h1>this is the HOME Page</h1>
      <h2>hello {state.username}</h2>
      <div>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <Employee employee={employee} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
