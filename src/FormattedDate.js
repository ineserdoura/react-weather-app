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

    return `${weekDay}, ${month} ${getOrdinal(day)} ${year}`;
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

  return (
    <span className="formattedDate">
      {greetUser()}
      <br></br> {date()}
    </span>
  );
}
