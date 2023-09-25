import React from "react";

const FormattedDate = (props) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let day = days[props.date.getDay()];
  let  month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let date = props.date.getDate();
  return (
    <div>
      {day}, {date} {month}. {year}
    </div>
  );
};

export default FormattedDate;
