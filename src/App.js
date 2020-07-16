import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather />
        <footer className="App-footer">
          <small>
            This page was coded by{" "}
            <a
              href="https://www.linkedin.com/in/in%C3%AAs-serdoura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inês Serdoura
            </a>{" "}
            and it's{" "}
            <a
              href="https://github.com/ineserdoura/weather-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
          </small>
<br/>
          <small>Built with</small>
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
