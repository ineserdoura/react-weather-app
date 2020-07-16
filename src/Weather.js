import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="form-inline">
        <div className="row">
          <div className="col-sm-7 ">
            <form className="form-inline" action="form">
              <input
                className="form-control"
                type="text"
                placeholder="Search City..."
                autoComplete="off"
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
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="icon"
          />
          <h2 className="current-temperature">
            <strong>31°</strong>
          </h2>
          <span>
            <a className="active" href="/">
              C
            </a>{" "}
            <a href="/">F</a>
          </span>
          <h3>
            <strong>Clear</strong>
          </h3>
          <span>
            <strong>31°</strong>
          </span>{" "}
          {""}
          <span>29°</span>
        </div>
        <div className="col-sm-6">
          <p>
            Feels like {""}
            <strong>31°</strong>
          </p>
          <p>
            Wind{""}
            <strong>10 km/h</strong>
          </p>
          <p>
            Humidity{""}
            <strong>70 %</strong>
          </p>
          <p>
            Clouds{""}
            <strong>0 %</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
