import { useState } from "react";

function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ padding: "8px", fontSize: "16px" }}
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button style={{ padding: "8px", marginLeft: "4px" }} type="submit">
        Search
      </button>
    </form>
  );
}

export default WeatherSearch;
