import React from "react";

export default function FormattedDate(props) {
  function date() {
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDay = weekDays[props.date.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[props.date.getMonth()];
    let day = props.date.getDate();
    let getOrdinal = function (n) {
      let s = ["th", "st", "nd", "rd"],
        v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    let year = props.date.getFullYear();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${weekDay}, ${month} ${getOrdinal(
      day
    )} ${year} ${hours}:${minutes}`;
  }
  function greetUser() {
    let hours = props.date.getHours();
    if (hours >= 6 && hours < 12) {
      return `Good morning!`;
    }
    if (hours >= 12 && hours < 20) {
      return `Good afternoon!`;
    } else {
      return `Good night!`;
    }
  }

  let ReactRotatingText = require("react-rotating-text");

  return (
    <span className="formattedDate">
      <ReactRotatingText
        items={[greetUser(), date()]}
        typingInterval={100}
        pause={2000}
        deletingInterval={100}
      />
    </span>
  );
}
