import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudRain,
  Snowflake,
  CloudRainWind,
  CloudLightning,
} from "lucide-react";

export function getWeatherCondition(code) {
  if (code === 0) return "Clear sky";
  if (code === 1 || code === 2) return "Partly cloudy";
  if (code === 3) return "Cloudy";
  if (code >= 45 && code <= 48) return "Foggy";
  if (code >= 51 && code <= 67) return "Rainy";
  if (code >= 71 && code <= 77) return "Snowy";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95) return "Thunderstorm";

  return "Unknown";
}

export function getWeatherIcon(code) {
  if (code === 0) return Sun;

  if (code === 1 || code === 2) {
    return CloudSun;
  }

  if (code === 3) return Cloud;

  if (code >= 45 && code <= 48) {
    return CloudFog;
  }

  if (code >= 51 && code <= 67) {
    return CloudRain;
  }

  if (code >= 71 && code <= 77) {
    return Snowflake;
  }

  if (code >= 80 && code <= 82) {
    return CloudRainWind;
  }

  if (code >= 95) {
    return CloudLightning;
  }

  return Cloud;
}

export function convertTemperature(celsius, unit) {
  if (unit === "F") {
    return (celsius * 9) / 5 + 32;
  }

  return celsius;
}
