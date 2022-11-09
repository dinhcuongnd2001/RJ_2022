import React from "react";
import axios from "axios";
// const axios = require("axios").default;
async function dataCovid() {
  let dataCovid;
  await axios
    .get("https://api.covid19api.com/total/country/vietnam")
    .then((data) => {
      dataCovid = data;
    })
    .catch((e) => console.log("error:", e));
  return dataCovid;
}

export default dataCovid;
