const GEOCODING_API = "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

// Search city and get latitude/longitude
export const searchCity = async (city) => {
  const response = await fetch(
    `${GEOCODING_API}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
  );

  if (!response.ok) {
    throw new Error("Failed to search city");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  return data.results[0];
};

// Get weather using latitude and longitude
export const getWeather = async (latitude, longitude) => {
  const url =
    `${WEATHER_API}?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `&temperature_unit=celsius` +
    `&wind_speed_unit=kmh` +
    `&timezone=auto` +
    `&forecast_days=5`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch weather. Please try again.");
  }

  return await response.json();
};
