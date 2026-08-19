import {
  getWeatherCondition,
  getWeatherIcon,
  convertTemperature,
} from "../utils/weatherUtils";

import WeatherIcon from "./WeatherIcon";

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00+05:30`);

  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    timeZone: "Asia/Kolkata",
  });
}

function Forecast({ daily, unit }) {
  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>

      <div className="forecast-list">
        {daily.time.map((date, index) => {
          const maxTemperature = convertTemperature(
            daily.temperature_2m_max[index],
            unit,
          );

          const minTemperature = convertTemperature(
            daily.temperature_2m_min[index],
            unit,
          );

          const code = daily.weather_code[index];

          const iconSlug = getWeatherIcon(code);

          return (
            <div className="forecast-card" key={date}>
              <h3>{formatDate(date)}</h3>

              <div className="forecast-icon">
                <WeatherIcon slug={iconSlug} size={64} />
              </div>

              <p>{getWeatherCondition(code)}</p>

              <strong>
                {maxTemperature.toFixed(1)}°{unit}
              </strong>

              <span>
                {" "}
                / {minTemperature.toFixed(1)}°{unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
