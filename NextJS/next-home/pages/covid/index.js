import React from "react";
import dataCovid from "../api/dataCovid";
import axios from "axios";

export async function getStaticProps() {
  const info = await axios
    .get("https://api.covid19api.com/total/country/vietnam")
    .then((data) => {
      return data.data;
    })
    .catch((e) => e);
  return {
    props: { info },
  };
}

function index({ info }) {
  return (
    <div className="container">
      <h1>Thong Ke Covid</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">date</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Actice</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {console.log(info)}
          {info.map((detail) => (
            <tr>
              <th scope="row">{detail.Date}</th>
              <td colSpan="2">{detail.Confirmed}</td>
              <td>{detail.Active}</td>
              <td>{detail.Recovered}</td>
              <td>{detail.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default index;
