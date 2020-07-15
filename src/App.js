import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <footer className="App-footer">
          <p>
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
          </p>

          <p>Built with</p>
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
