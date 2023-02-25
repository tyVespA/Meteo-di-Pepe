import { useState, useEffect } from "react";
import Header from "./header";
import CityNameInput from "@/components/cityNameInput";
import TodayWeather from "./todayWeather";
import s from "../styles/main.module.css";

export default function Main() {
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
  const [cityName, setCityName] = useState("Milan");

  function handleCityNameChange(newCityName) {
    setCityName(newCityName);
  }

  let apiCityName = cityName ? cityName : "Milan";

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

  const sunnyBackground = "linear-gradient(to top, #60efff, #0061ff)";

  const location = weatherData.name;
  const tempNow = Math.round(weatherData.tempNow);
  const weatherDescription = weatherData.weatherDescription;
  const weatherDescriptionCapitalized =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

  return (
    <div
      className={s.main}
      style={{
        backgroundImage: sunnyBackground,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Header>
        <CityNameInput onCityNameChange={handleCityNameChange} />
      </Header>

      <TodayWeather
        cityName={location}
        temp={tempNow}
        weatherDescription={weatherDescriptionCapitalized}
      />
      <p>City: {weatherData.name}</p>
      <p>Time: {currentTime()}</p>
      <p>Time: {unixToGMT(weatherData.time)}</p>
      <p>Temp: {Math.round(weatherData.tempNow)}</p>
    </div>
  );
}
