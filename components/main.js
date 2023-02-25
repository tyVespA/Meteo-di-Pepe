import { useState, useEffect } from "react";
import TodayWeather from "./todayWeather";

export default function Main({ cityName }) {
  //converts unix time to GMT
  function unixToGMT(unixTime) {
    const gmtTime = new Date(unixTime * 1000);
    const hour = gmtTime.getHours();
    return gmtTime.toString();
  }

  //returns current time
  function currentTime() {
    const currentTime = new Date();
    return currentTime.toString();
  }

  const [weatherData, setWeatherData] = useState(null);

  let apiCityName = cityName ? cityName : "Milan";

  // let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCityName}&APPID=9f83fc78fec54524b03472e33f9fdaf8`;
  let API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCityName}&appid=9f83fc78fec54524b03472e33f9fdaf8&units=metric&lang=it`;

  async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { name } = data.city;
    const time = data.list[0].dt;
    const tempNow = data.list[0].main.temp;
    const weatherDescription = data.list[0].weather[0].description;
    // const { speed } = data.wind;
    setWeatherData({ name, tempNow, time, weatherDescription });
  }

  useEffect(() => {
    fetchData();
  }, [cityName]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const location = weatherData.name;
  const tempNow = Math.round(weatherData.tempNow);
  const weatherDescription = weatherData.weatherDescription;

  return (
    <div>
      <TodayWeather
        cityName={location}
        temp={tempNow}
        weatherDescription={weatherDescription}
      />
      <p>City: {weatherData.name}</p>
      <p>Time: {currentTime()}</p>
      <p>Time: {unixToGMT(weatherData.time)}</p>
      <p>Temp: {Math.round(weatherData.tempNow)}</p>
    </div>
  );
}
