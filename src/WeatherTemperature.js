import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="weatherTemperature">
        <h2 className="temperature">{props.celsius}</h2>
        <span>
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <h2 className="temperature">{Math.round(fahrenheit())}</h2>
        <span>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
