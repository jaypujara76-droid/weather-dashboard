import {
  getWeatherCondition,
  getWeatherIcon,
  convertTemperature,
} from "../utils/weatherUtils";

function WeatherCard({ weather, unit }) {
  const code = weather.current.weather_code;
  
    const Icon = getWeatherIcon(code);

  const temperature = convertTemperature(weather.current.temperature_2m, unit);

  return (
    <div className="weather-card">
      <h2>
        {weather.cityName}, {weather.country}
      </h2>

      <div className="weather-icon">
        <Icon size={70} strokeWidth={2} />
      </div>

      <h1>
        {temperature.toFixed(1)}°{unit}
      </h1>

      <h3>{getWeatherCondition(code)}</h3>

      <p>Humidity: {weather.current.relative_humidity_2m}%</p>

      <p>Wind: {weather.current.wind_speed_10m} km/h</p>
    </div>
  );
}

export default WeatherCard;
