import React from "react";

const WeatherForecastDay = (props) => {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <img
        className="forecastIcon"
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
        alt={props.data.weather[0].description}
        style={{ width: 56, height: 56 }}
      />
      <div className="forecastTemperature">
        <span className="temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
