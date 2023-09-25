import React from 'react'

const WeatherDetails = (props) => {
  return (
    <div className="row temp-row mt-5">
      <div className="col-4 temp">
        {Math.round(props.details.temperature)}
        <span className="unit">°C</span>
      </div>
      <div className="col-4">
        <img
          src={props.details.weatherIconUrl}
          alt={props.details.decription}
        />
      </div>
      <div className="col-4">
        <ul className="weather-conditions">
          <li className="fst-italic">{props.details.decription}</li>
          <li>Wind: {Math.round(props.details.wind)} km/h</li>
          <li>Humidity: {Math.round(props.details.humidity)}%</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherDetails