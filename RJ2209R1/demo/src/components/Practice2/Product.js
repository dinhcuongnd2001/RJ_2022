import { useParams } from "react-router-dom";
import React from "react";

function Product() {
  const { name } = useParams();
  return <div>the option checked is {name}</div>;
}

export default Product;
