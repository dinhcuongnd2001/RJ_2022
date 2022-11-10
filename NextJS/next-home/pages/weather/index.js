import React, { useState, useEffect } from "react";
import axios from "axios";

export async function getStaticProps() {
  let getData;
  await axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=d151dc8127a189b8a2a42dbe47b67a79"
    )
    .then((data) => {
      getData = data.data;
    })
    .catch((e) => console.error(e));
  return {
    props: {
      getData,
    },
  };
}

function index({ getData }) {
  console.log(getData);
  return (
    <div>
      <h1>Weather Day</h1>

      <div className="container">
        <img
          src={`http://openweathermap.org/img/wn/${getData.weather[0].icon}@2x.png`}
          alt="#error"
        />
        <span>{Math.ceil(getData.main.temp - 273)} *C</span>
        <div className="container">
          <div className="container">
            <span>Main:</span>
            <span>{getData.weather[0].main}</span>
          </div>
          <div className="container">
            <span>Humidity:</span>
            <span>{getData.main.humidity}</span>
          </div>
          <div className="container">
            <span>Main:</span>
            <span>{getData.wind.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
