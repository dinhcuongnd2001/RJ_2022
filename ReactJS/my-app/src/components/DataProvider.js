import React from "react";
import { useState, createContext } from "react";
const Value = createContext();
function DataProvider(props) {
  const [check, setCheck] = useState(false);
  return (
    <Value.Provider value={{ check, setCheck }}>
      {props.children}
    </Value.Provider>
  );
}

export default DataProvider;
export { Value };
