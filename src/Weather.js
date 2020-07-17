import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  function showWeather(response) {
    console.log(response.data);
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      min: response.data.main.temp_max,
      max: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed * 3.6,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm-12">
            <strong>
              Thursday, July 16th 2020 <br /> <small>Last update: 12:35</small>
            </strong>
          </div>
        </div>
        <div className="row search-engine">
          <div className="col-sm-6 ">
            <form className=" form-inline" action="form">
              <input
                className="form-control"
                type="text"
                placeholder="Search City..."
                autoComplete="off"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-sm-6 ">
            <input className="btn" type="submit" value="Search" />
            <input className="btn" type="submit" value="Current" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <h1>{weather.city}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li>
                {" "}
                <img src={weather.icon} alt={weather.description} />{" "}
                <h2 className="temperature">
                  {Math.round(weather.temperature)}°
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
                    {weather.description}
                  </strong>
                </h4>
              </li>
              <li>
                <strong>{Math.round(weather.max)}°</strong>{" "}
                {Math.round(weather.min)}°
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>
                Feels like {""}
                <strong>{Math.round(weather.feelsLike)}°</strong>
              </li>
              <li>
                Wind {""}
                <strong>{Math.round(weather.wind)} km/h</strong>
              </li>
              <li>
                Humidity {""}
                <strong>{Math.round(weather.humidity)} %</strong>
              </li>
              <li>
                Clouds {""}
                <strong>{weather.clouds} %</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9261c308257e6cb61b3c077acec2b0f7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Porto&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return <h1>Loading weather...</h1>;
  }
}
