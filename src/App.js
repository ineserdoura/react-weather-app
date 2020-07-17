import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Porto" />
        <footer>
          <small>
            This page was coded by{" "}
            <strong>
              <a
                href="https://www.linkedin.com/in/in%C3%AAs-serdoura/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inês Serdoura
              </a>
            </strong>{" "}
            and it's{" "}
            <strong>
              <a
                href="https://github.com/ineserdoura/weather-react-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                open-sourced on GitHub
              </a>
            </strong>{" "}
          </small>
          <br />
          <small>Built with</small>
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
