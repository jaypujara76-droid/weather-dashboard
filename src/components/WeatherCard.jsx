import {
  getWeatherCondition,
  getWeatherIcon,
  convertTemperature,
} from "../utils/weatherUtils";

import WeatherIcon from "./WeatherIcon";

function formatCurrentDate() {
  const date = new Date();

  return {
    day: date.toLocaleDateString("en-IN", {
      weekday: "long",
      timeZone: "Asia/Kolkata",
    }),

    date: date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    }),
  };
}

function WeatherCard({ weather, unit }) {
  const currentDate = formatCurrentDate();

  const temperature = convertTemperature(
    weather.current.temperature_2m,
    unit
  );

  const iconSlug = getWeatherIcon(
    weather.current.weather_code
  );

  return (
    <div className="preview-card">
      <h3>
        {weather.cityName}, {weather.country}
      </h3>

      <div className="current-date">
        <strong>{currentDate.day}</strong>
        <span>{currentDate.date}</span>
      </div>

      <div className="current-weather-icon">
        <WeatherIcon
          slug={iconSlug}
          size={100}
        />
      </div>

      <p className="temperature">
        {temperature.toFixed(1)}°{unit}
      </p>

      <p>
        {getWeatherCondition(
          weather.current.weather_code
        )}
      </p>

      <p>
        Humidity: {weather.current.relative_humidity_2m}%
      </p>

      <p>
        Wind: {weather.current.wind_speed_10m} km/h
      </p>
    </div>
  );
}

export default WeatherCard;