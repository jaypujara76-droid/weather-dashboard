import { useState } from "react";
import { searchCity, getWeather } from "./services/weatherApi";
import CityList from "./components/CityList";
import TemperatureToggle from "./components/TemperatureToggle";
import Forecast from "./components/Forecast";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [savedCities, setSavedCities] = useState(() => {
    const saved = localStorage.getItem("savedCities");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [unit, setUnit] = useState("C");
  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      // Search city
      const cityData = await searchCity(city);

      // Get weather
      const weatherData = await getWeather(
        cityData.latitude,
        cityData.longitude,
      );

      const newWeather = {
        cityName: cityData.name,
        country: cityData.country,
        latitude: cityData.latitude,
        longitude: cityData.longitude,
        current: weatherData.current,
        daily: weatherData.daily,
      };

      setWeather(newWeather);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveCity = () => {
    if (!weather) {
      setError("Please search for a city first");
      return;
    }

    const alreadySaved = savedCities.some(
      (savedCity) =>
        savedCity.cityName.toLowerCase() === weather.cityName.toLowerCase(),
    );

    if (alreadySaved) {
      setError("City is already saved");
      return;
    }

    const updatedCities = [...savedCities, weather];

    setSavedCities(updatedCities);

    localStorage.setItem("savedCities", JSON.stringify(updatedCities));

    setError("");
  };

  return (
    <div className="app">
      <h1>🌤️ Multi-City Weather Dashboard</h1>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>Search</button>

        <TemperatureToggle unit={unit} setUnit={setUnit} />

        <button onClick={saveCity} disabled={!weather}>
          Save City
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Fetching weather...</p>
        </div>
      )}

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Current Weather */}
      {weather && (
        <div>
          <h2>Current Weather</h2>

          <div className="preview-card">
            <h3>
              {weather.cityName}, {weather.country}
            </h3>

            <p>
              {unit === "C"
                ? weather.current.temperature_2m
                : ((weather.current.temperature_2m * 9) / 5 + 32).toFixed(1)}
              °{unit}
            </p>

            <p>Humidity: {weather.current.relative_humidity_2m}%</p>

            <p>Wind: {weather.current.wind_speed_10m} km/h</p>
          </div>
        </div>
      )}

      {/* Forecast */}
      {weather && <Forecast daily={weather.daily} unit={unit} />}

      {/* Saved Cities */}
      {savedCities.length > 0 && (
        <div>
          <h2>Saved Cities</h2>

          <CityList cities={savedCities} unit={unit} />
        </div>
      )}
    </div>
  );
}

export default App;
