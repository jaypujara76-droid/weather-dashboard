import clearDay from "@meteocons/svg/fill/clear-day.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import overcast from "@meteocons/svg/fill/overcast.svg";
import fogDay from "@meteocons/svg/fill/fog-day.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import snow from "@meteocons/svg/fill/snow.svg";
import partlyCloudyDayRain from "@meteocons/svg/fill/partly-cloudy-day-rain.svg";
import thunderstormsDayRain from "@meteocons/svg/fill/thunderstorms-day-rain.svg";
import notAvailable from "@meteocons/svg/fill/not-available.svg";

const icons = {
  "clear-day": clearDay,
  "partly-cloudy-day": partlyCloudyDay,
  overcast,
  "fog-day": fogDay,
  rain,
  snow,
  "partly-cloudy-day-rain": partlyCloudyDayRain,
  "thunderstorms-day-rain": thunderstormsDayRain,
  "not-available": notAvailable,
};

function WeatherIcon({ slug, size = 64 }) {
  const icon = icons[slug] || notAvailable;

  return (
    <img
      src={icon}
      alt={slug}
      width={size}
      height={size}
    />
  );
}

export default WeatherIcon;