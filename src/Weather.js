import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="form-inline search-engine">
        <div className="row">
          <div className="col-sm-7 ">
            <form className="form-inline" action="form">
              <input
                className="form-control"
                type="text"
                placeholder="Search City..."
                autoComplete="off"
                autoFocus="on"
              />
              <input className="btn" type="submit" value="🔍" />
              <input className="btn" type="submit" value="📍" />
            </form>
          </div>
          <div className="col-sm-5">
            <strong>
              Thursday, July 16th 2020
              <br />
              <small>Last update: 12:35</small>
            </strong>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-sm-12">
          <h1>Porto</h1>
        </div>
      </div>
      <div className="row align-content-center">
        <div className="col-sm-6">
          <ul>
            <li>
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="icon"
              />{" "}
              <h2 className="temperature">31°</h2>
              <span>
                <a className="active" href="/">
                  C
                </a>{" "}
                <a href="/">F</a>
              </span>
            </li>
            <li>
              <h4>
                <strong>Clear</strong>
              </h4>
            </li>
            <li>
              <strong>31°</strong> 29°
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              Feels like {""}
              <strong>31°</strong>
            </li>
            <li>
              Wind {""}
              <strong>10 km/h</strong>
            </li>
            <li>
              Humidity {""}
              <strong>70 %</strong>
            </li>
            <li>
              Clouds {""}
              <strong>0 %</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
