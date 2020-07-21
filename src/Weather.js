import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed * 3.6,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
    });
  }

  function search() {
    const apiKey = "9261c308257e6cb61b3c077acec2b0f7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = "9261c308257e6cb61b3c077acec2b0f7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weather.loaded) {
    return (
      <div className="weather">
        <div className="row search-engine">
          <div className="col-sm-6 d-flex justify-content-center ">
            <form
              className=" form-inline"
              action="form"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Search City..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
          </div>
          <div className="col-sm-6 d-flex justify-content-center ">
            <input className="btn" type="submit" value="Search" />
            <input
              className="btn"
              type="submit"
              value="Current"
              onClick={getCurrentPosition}
            />
          </div>
        </div>
        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    search();
    return <h1>Loading weather...</h1>;
  }
}
