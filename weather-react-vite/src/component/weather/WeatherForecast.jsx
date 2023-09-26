import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const handleResponse = (response) => {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  };

  useEffect(() => {
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.data.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col mt-5 mb-4" key={index}> 
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default WeatherForecast;
