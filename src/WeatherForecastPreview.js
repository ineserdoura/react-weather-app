import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return temperature;
  }

  return (
    <div className="WeatherForecastPreview col-sm-2 ">
      <h6>{day()}</h6>

      <WeatherIcon code={props.data.weather[0].icon} />
      <small>
        <strong>{temperature()}°</strong>
      </small>
    </div>
  );
}
