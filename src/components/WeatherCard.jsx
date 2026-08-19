import WeatherIcon from "./WeatherIcon";
import { getWeatherCondition, convertTemperature } from "../utils/weatherUtils";

function WeatherCard({ weather, unit }) {
  if (!weather || !weather.current) {
    return null;
  }

  const temperature = convertTemperature(weather.current.temperature_2m, unit);

  const weatherCode = weather.current.weather_code;
  const currentDate = new Date(weather.current.time);

  const formattedDate = currentDate.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // const formattedTime = currentDate.toLocaleTimeString("en-IN", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: true,
  // });

  return (
    <div className="preview-card">
      <h3>
        {weather.cityName}, {weather.country}
      </h3>

      <p className="current-date">{formattedDate}</p>

      {/* <p className="current-time">{formattedTime}</p> */}
      
      <div className="current-weather-icon">
        <WeatherIcon code={weatherCode} size={100} />
      </div>

      <p className="temperature">
        {temperature.toFixed(1)}°{unit}
      </p>

      <p>{getWeatherCondition(weatherCode)}</p>

      <p>Humidity: {weather.current.relative_humidity_2m}%</p>

      <p>Wind: {weather.current.wind_speed_10m} km/h</p>
    </div>
  );
}

export default WeatherCard;
