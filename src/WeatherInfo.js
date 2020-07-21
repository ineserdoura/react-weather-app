import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row overview ">
        <div className="col-sm-6 d-flex justify-content-center ">
          <h1>{props.info.city}</h1>
        </div>
        <div className="col-sm-6 d-flex justify-content-center ">
          <strong>
            <small>
              <FormattedDate date={props.info.date} />
            </small>
          </strong>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center ">
          <ul>
            <li>
              {" "}
              <img src={props.info.icon} alt={props.info.description} />{" "}
              <h2 className="temperature">
                {Math.round(props.info.temperature)}°
              </h2>
              <span>
                <a className="active" href="/">
                  C
                </a>{" "}
                <a href="/">F</a>
              </span>
            </li>
            <li>
              <h4>
                <strong className="text-capitalize">
                  {props.info.description}
                </strong>
              </h4>
            </li>
            <li>
              <strong>{Math.round(props.info.max)}°</strong>{" "}
              {Math.round(props.info.min)}°
            </li>
          </ul>
        </div>
        <div className="col-sm-6 d-flex justify-content-center ">
          <ul className="extraData">
            <li>
              Feels like {""}
              <strong>{Math.round(props.info.feelsLike)}°</strong>
            </li>
            <li>
              Wind {""}
              <strong>{Math.round(props.info.wind)} km/h</strong>
            </li>
            <li>
              Humidity {""}
              <strong>{Math.round(props.info.humidity)} %</strong>
            </li>
            <li>
              Clouds {""}
              <strong>{props.info.clouds} %</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
