import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  if (props.unit === "celsius") {
    return (
      <div className="weatherInfo">
        <div className="row overview ">
          <div className="col-sm-12 d-flex justify-content-center ">
            <h1>{props.info.city}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center ">
            <ul className="currentTemperature">
              <li>
                {" "}
                <WeatherIcon code={props.info.icon} />{" "}
                <span className="temperature">
                  {Math.round(props.info.temperature)}°C
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
  } else {
    return (
      <div className="weatherInfo">
        <div className="row overview ">
          <div className="col-sm-12 d-flex justify-content-center ">
            <h1>{props.info.city}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center ">
            <ul className="currentTemperature">
              <li>
                {" "}
                <WeatherIcon code={props.info.icon} />{" "}
                <span className="temperature">
                  {Math.round((props.info.temperature * 9) / 5 + 32)}°F
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
                <strong>{Math.round((props.info.max * 9) / 5 + 32)}°</strong>{" "}
                {Math.round((props.info.min * 9) / 5 + 32)}°
              </li>
            </ul>
          </div>
          <div className="col-sm-6 d-flex justify-content-center ">
            <ul className="extraData">
              <li>
                Feels like {""}
                <strong>
                  {Math.round((props.info.feelsLike * 9) / 5 + 32)}°
                </strong>
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
}
