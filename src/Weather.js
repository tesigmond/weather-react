import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="overview">
        <h1 id="city">New York</h1>
        <ul>
          <li>
            Last updated: <span id="date">Tuesday 10:00</span>
          </li>
          <li id="weather-description">Cloudy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt=""
              className="float-left"
              id="icon"
            />

            <div className="float-left">
              <strong className="temperature">12</strong>
              <small className="units"> °F</small>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>80%</span>
            </li>
            <li>
              Wind: <span>10 mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
