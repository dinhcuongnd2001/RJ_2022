import React from "react";

function Info(props) {
  const getSum = (data) => {
    console.log("data: ", data);
    return data.reduce((result, curr) => result + curr, 0);
  };

  const info = props.data.reduce((result, curr) => {
    console.log("result: ", result);
    return getSum(result["arrvalue"]) > getSum(curr["arrvalue"])
      ? result
      : curr;
  }, {});
  return (
    <div>
      Thông tin người có tuổi lớn nhất:
      <h1>
        Name:{info["name"]} - Age: {info["age"]}
      </h1>
    </div>
  );
}

export default Info;
