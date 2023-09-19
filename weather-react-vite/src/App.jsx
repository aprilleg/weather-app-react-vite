import './App.css'
import Weather from './component/Weather';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
        <small>
          This project was coded by AG and is{" "}
          <a
            href="https://github.com/aprilleg/weather-app-react-vite"
            target="_blank"
          >
            Open-sourced on Github
          </a>
        </small>
    </div>
  );
}

export default App
