import { useState, useEffect } from "react";

export default function Main({ cityName }) {
  const [weatherData, setWeatherData] = useState(null);

  let apiCityName = cityName ? cityName : "Milan";

  // let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCityName}&APPID=9f83fc78fec54524b03472e33f9fdaf8`;
  let API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCityName}&appid=9f83fc78fec54524b03472e33f9fdaf8&units=metric`;

  async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { name } = data.city;
    const { temp } = data.list[0].main;
    // const { speed } = data.wind;
    setWeatherData({ name, temp });
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
      <p>Temp: {Math.round(weatherData.temp)}</p>
    </div>
  );
}
