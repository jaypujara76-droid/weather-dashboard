import clearDay from "@meteocons/svg/fill/clear-day.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import overcast from "@meteocons/svg/fill/overcast.svg";
import fog from "@meteocons/svg/fill/fog.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import snow from "@meteocons/svg/fill/snow.svg";
import thunderstormsDayRain from "@meteocons/svg/fill/thunderstorms-day-rain.svg";
import notAvailable from "@meteocons/svg/fill/not-available.svg";

const icons = {
  "clear-day": clearDay,
  "partly-cloudy-day": partlyCloudyDay,
  overcast: overcast,
  fog: fog,
  rain: rain,
  snow: snow,
  "thunderstorms-day-rain": thunderstormsDayRain,
  "not-available": notAvailable,
};

function WeatherIcon({ code, size = 100 }) {
  let iconName = "not-available";

  if (code === 0) {
    iconName = "clear-day";
  } else if (code === 1 || code === 2) {
    iconName = "partly-cloudy-day";
  } else if (code === 3) {
    iconName = "overcast";
  } else if (code >= 45 && code <= 48) {
    iconName = "fog";
  } else if (code >= 51 && code <= 67) {
    iconName = "rain";
  } else if (code >= 71 && code <= 77) {
    iconName = "snow";
  } else if (code >= 80 && code <= 82) {
    iconName = "rain";
  } else if (code >= 95) {
    iconName = "thunderstorms-day-rain";
  }

  return (
    <img
      src={icons[iconName]}
      alt="Weather"
      width={size}
      height={size}
    />
  );
}

export default WeatherIcon;