# Weather Dashboard

A responsive React weather dashboard that allows users to search cities, view current weather conditions, compare multiple saved cities, and view a 5-day forecast.

Weather data is provided by the Open-Meteo API.

## Features

- Search weather by city name
- Display current temperature
- Display weather condition and icon
- Display humidity
- Display wind speed
- Save multiple cities
- Automatically refresh weather for saved cities
- Toggle between Celsius (°C) and Fahrenheit (°F)
- Display a 5-day weather forecast
- Persist saved cities using `localStorage`
- Loading state while fetching weather
- Error handling for invalid cities and API failures
- Responsive design for desktop and mobile

---

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- Open-Meteo API
- Lucide React
- Browser Local Storage
- Git & GitHub

---

##  API

This project uses **Open-Meteo** for weather data.

Open-Meteo provides:

- Current temperature
- Humidity
- Wind speed
- Weather codes
- Daily maximum/minimum temperature
- 5-day forecast

It does not require an API key.

---

##  Project Structure

```text
weather-dashboard/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── CityList.jsx
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TemperatureToggle.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── services/
│   │   └── weatherapi.jsx
│   │
│   ├── utils/
│   │   └── weatherUtils.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

---

## Installation

Clone the repository:

git clone https://github.com/jaypujara76-droid/weather-dashboard.git

Move into the project:

cd weather-dashboard

Install dependencies:

npm install

## Run the Application

Start the development server:

npm run dev 

Vite will provide a local URL such as:

http://localhost:5173

---

## Weather Icons

Open-Meteo provides a numeric weather code.

The application maps these codes to icons using lucide-react.

Example:
0       → Clear sky
1–2     → Partly cloudy
3       → Cloudy
45–48   → Fog
51–67   → Rain
71–77   → Snow
80–82   → Rain showers
95+     → Thunderstorm

---

## Saved Cities

Saved cities are persisted using browser localStorage.

Only the city information and coordinates are stored:
City name
Country
Latitude
Longitude

When the application loads, it uses those coordinates to fetch the latest weather data.

This prevents stale weather information from being displayed after a page refresh

---
## Git Branching Strategy

The Project uses a simple feature-branch workflow.

main
 |
 |--feature/current-weather-ui
 |
 |--other feature branches

Features are developed on separate branches and merged into main after testing.

## Responsive Design

The dashboard is designed to work across:

Desktop
Laptop
Tablet
Mobile

CSS Grid and Flexbox are used to make the weather cards responsive.

---
## Future Improvements

Possible future improvements include:

Hourly forecast
Weather alerts
Automatic location detection
Weather charts
Dark mode
Unit selection for wind speed
More detailed weather information
Automated testing

---
## Author
Jaydeep Poojara
Github:
https://github.com/jaypujara76-droid

