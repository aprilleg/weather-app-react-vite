import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [show, setShow] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const handleResponse = (response) => {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      decription: response.data.weather[0].description,
      weatherIconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });

    setShow(true);
  };

  const search = () => {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (show) {
    return (
      <div className="Weather-info">
        <form className="mb-3 mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              {" "}
              <input
                type="text"
                placeholder="Enter a city.."
                className="form-control no-background"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4 d-grid d-block">
              <button className="btn btn-primary custom-btn">Submit</button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};

export default Weather;
