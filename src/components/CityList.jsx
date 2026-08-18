import WeatherCard from "./WeatherCard";

function CityList({ cities,unit }) {
  return (
    <div className="city-list">
      {cities.map((city) => (
        <WeatherCard
          key={`${city.cityName}-${city.country}`}
          weather={city}
          unit={unit}
        />
      ))}
    </div>
  );
}

export default CityList;