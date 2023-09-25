import React from 'react'

const WeatherForecastDay = (props) => {
  return (
    <div>
      <div className="forecastDay">{props.data.dt}</div>
      <img
        className="forecastIcon"
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
        alt={forecast[0].weather[0].description}
        style={{ width: 56, height: 56 }}
      />
      <div className="forecastTemperature">
        <span className="temperature-min">{forecast[0].temp.min}°</span>{" "}
        <span className="temperature-max">{forecast[0].temp.max}°</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay