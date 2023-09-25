import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

const WeatherForecast = (props) => {
  const [loaded, setloaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  const handleResponse = (response) => {
    console.log(response.data);
    setforecast(response.data.daily);
    setloaded(true);
  };

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecastDay">Wed</div>
            <img
              className="forecastIcon"
              src={props.data.weatherIconUrl}
              alt={props.data.decription}
              style={{ width: 56, height: 56 }}
            />
            <div className="forecastTemperature">
              <span className="temperature-min">19°</span> {""}
              <span className="temperature-max">27°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
};

export default WeatherForecast;
