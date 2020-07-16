import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
    
      <div className="row">
        <div className="col-12">
          <h1>Porto</h1>
        </div>
        <div className="col-6">
          <ul>
          
          <li><h4>31°        <a href="/">C</a>|<a href="/">F</a></h4>  
          </li>

            <li>
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="icon"/>Clear
            </li>
            <li>
              20° <small>18°</small>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like 20°</li>
            <li>Wind</li>
            <li>Humidity</li>
            <li>Clouds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
