import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [celsiusSelected, setCelsiusSelected] = useState({});
  const [fahrenheitSelected, setFahrenheitSelected] = useState({});

  function getFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setFahrenheitSelected({
      color: `#282c34`,
      backgroundColor: `#fff`,
    });
    setCelsiusSelected({});
  }

  function getCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setCelsiusSelected({
      color: `#282c34`,
      backgroundColor: `#fff`,
    });
    setFahrenheitSelected({});
  }

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
        <div className="row">
          <div className="col-sm-9 d-flex justify-content-center ">
            <strong>
              {" "}
              <FormattedDate date={weather.date} />
            </strong>
          </div>
          <div className="col-sm-3 d-flex justify-content-center ">
            <button
              className="btn units"
              onClick={getCelsius}
              style={celsiusSelected}
            >
              C
            </button>
            <button
              className="btn units"
              onClick={getFahrenheit}
              style={fahrenheitSelected}
            >
              F
            </button>
          </div>
        </div>
        <div className="row search-engine">
          <div className="col-sm-12 d-flex justify-content-center ">
            <form action="form" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Search City..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input className="btn" type="submit" value="Search" />
              <input
                className="btn"
                type="submit"
                value="Current"
                onClick={getCurrentPosition}
              />
            </form>
          </div>
        </div>
        <WeatherInfo info={weather} unit={unit} />
        <WeatherForecast city={weather.city} unit={unit} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <Loader
          type="Puff"
          color="#282c34"
          height={100}
          width={100}
          timeout={10000}
        />
        <h1>
          Loading weather, <em>please wait...</em>
        </h1>
      </div>
    );
  }
}
