import React from 'react'
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather-info">
      <form className='mb-3 mt-3'>
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
      <h1>Weather in Philippines</h1>
      <p>Tuesday 19, September</p>
      <p>12:00am</p>
      <div className="row temp-row mt-4">
        <div className="col-4 temp">23&deg;c</div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly_cloudy"
          />
        </div>
        <div className="col-4">
          <ul className='weather-conditions'>
            <li>Wind:10km/h</li>
            <li>Humidity: 66%</li>
            <li>Precipitation:43%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weather