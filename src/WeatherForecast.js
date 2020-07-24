import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState({});

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row justify-content-center">
        <WeatherForecastPreview data={forecast.list[7]} />
        <WeatherForecastPreview data={forecast.list[15]} />
        <WeatherForecastPreview data={forecast.list[23]} />
        <WeatherForecastPreview data={forecast.list[31]} />
        <WeatherForecastPreview data={forecast.list[39]} />
      </div>
    );
  } else {
    const apiKey = "9261c308257e6cb61b3c077acec2b0f7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
