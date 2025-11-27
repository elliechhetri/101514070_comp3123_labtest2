import { useState } from "react";
import "./App.css";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "97ceb3e6300b05d3aa66f66646457db4";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    setError("");
    setWeather(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod !== 200) {
        setError(data.message || "Something went wrong");
        return;
      }
      setWeather(data);
    } catch (err) {
      setError("Network error");
    }
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Weather App</h1>
        <WeatherSearch onSearch={handleSearch} />
        {error && <p className="error-text">{error}</p>}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default App;
