import React from "react";
import FormattedDate from "../date/FormattedDate";
import FormattedTime from "../date/FormattedTime";
import WeatherDetails from "./WeatherDetails";

const WeatherInfo = (props) => {
  return (
    <div className="mt-5">
      <h1>Weather in {props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <FormattedTime />
      <WeatherDetails details={props.data} />
    </div>
  );
};

export default WeatherInfo;
