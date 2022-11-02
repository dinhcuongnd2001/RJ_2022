import React from "react";
import { useState } from "react";

function Employee({ employee: { id, name, age } }) {
  const [detail, setDetail] = useState(true);
  const handleClick = () => {
    setDetail(!detail);
  };
  return (
    <div>
      {detail ? `${id} - ${name} - ${age}` : name}
      <button className="btn btn-primary m-3" onClick={handleClick}>
        {detail ? "short" : "detail"}
      </button>
    </div>
  );
}

export default Employee;
