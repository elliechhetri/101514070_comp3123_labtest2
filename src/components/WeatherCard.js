function WeatherCard({ weather }) {
  if (!weather) return null;

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img src={iconUrl} alt={weather.weather[0].description} />

      <p style={{ textTransform: "capitalize" }}>
        {weather.weather[0].description}
      </p>

      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
