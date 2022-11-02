import React from "react";
import { useLocation } from "react-router-dom";
function Home() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="container d-column-flex justify-content-center">
      <h1>this is the HOME Page</h1>
      <br />
      <h2>hello {state.username}</h2>
    </div>
  );
}

export default Home;
