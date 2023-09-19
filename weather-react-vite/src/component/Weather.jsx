import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = () => {
  const [show, setShow] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const handleResponse = (response) => {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      decription: response.data.weather[0].description,
      date: "12:00 AM",
    });

    setShow(true);
  };

  if (show) {
    return (
      <div className="Weather-info">
        <form className="mb-3 mt-3">
          <div className="row">
            <div className="col-8">
              {" "}
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-4 d-grid d-block">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        <h1>Weather in {weatherData.city}</h1>
        <p>Tuesday 19, September</p>
        <p>{weatherData.date}</p>
        <div className="row temp-row mt-4">
          <div className="col-4 temp">
            {Math.round(weatherData.temperature)}
            <span className="unit">°C</span>
          </div>
          <div className="col-4">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly_cloudy"
            />
          </div>
          <div className="col-4">
            <ul className="weather-conditions">
              <li className="fst-italic">{weatherData.decription}</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let city = "Philippines";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
};

export default Weather;
