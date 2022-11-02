import { useParams, useLocation } from "react-router-dom";
import React from "react";

function Product() {
  //   const { name } = useParams();
  let location = useLocation();
  return <div>the option checked {location.state.name} </div>;
}

export default Product;
