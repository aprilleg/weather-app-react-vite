import './App.css'
import Weather from './component/weather/Weather';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Philippines" />
      </div>
      <small className=" text-body-tertiary">
        This project was coded by AG and is{" "}
        <a
          href="https://github.com/aprilleg/weather-app-react-vite"
          target="_blank"
        >
          Open-sourced on Github.
        </a>
      </small>
    </div>
  );
}

export default App
