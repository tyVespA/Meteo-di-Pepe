import { useState, useEffect } from "react";

export default function WeatherData({ cityName }) {
  const [weatherData, setWeatherData] = useState(null);

  let apiCityName = cityName ? cityName : "Milan";

  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCityName}&APPID=9f83fc78fec54524b03472e33f9fdaf8`;

  async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { name } = data;
    const { humidity } = data.main;
    const { speed } = data.wind;
    setWeatherData({ name, humidity, speed });
  }

  useEffect(() => {
    fetchData();
  }, [cityName]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>City: {weatherData.name}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Wind speed: {weatherData.speed}</p>
    </div>
  );
}
