import { useState, useEffect } from "react";
import Header from "./header";
import Image from "next/image";
import CityNameInput from "@/components/cityNameInput";
import TodayWeather from "./todayWeather";
import s from "../styles/main.module.css";
import FutureDayWeather from "./futureDayWeather";

import { textAlign } from "@mui/system";

export default function Main() {
  //converts unix time to GMT
  function getCurrentHour(unixTime) {
    const gmtTime = new Date(unixTime * 1000);
    const hour = gmtTime.getHours();
    return hour;
  }

  // removes one decimal number to temp
  function removeDecimal(temp) {
    return Math.round(temp * 10) / 10;
  }

  //returns current time
  function currentTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minutes}`;
  }

  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Milan");
  const [backGroundColor, setBackGroundColor] = useState("");
  const [image, setImage] = useState("");
  const [imageDay2, setImageDay2] = useState("");
  const [imageDay3, setImageDay3] = useState("");
  const [imageDay4, setImageDay4] = useState("");
  const [imageDay5, setImageDay5] = useState("");
  const [imageDay6, setImageDay6] = useState("");

  function handleCityNameChange(newCityName) {
    setCityName(newCityName);
  }

  let apiCityName = cityName ? cityName : "Milan";

  let API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCityName}&appid=9f83fc78fec54524b03472e33f9fdaf8&units=metric&lang=it`;

  // TODO: ADD MORE VARIABLES

  async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const name = data.city.name;
    const time = data.list[0].dt;
    const tempNow = data.list[0].main.temp;
    const tempDay1 = data.list[8].main.temp;
    const tempDay2 = data.list[16].main.temp;
    const tempDay3 = data.list[24].main.temp;
    const tempDay4 = data.list[32].main.temp;
    const tempDay5 = data.list[39].main.temp;
    const weatherDescription = data.list[0].weather[0].description;
    const weatherDescription2 = data.list[8].weather[0].description;
    const weatherDescription3 = data.list[16].weather[0].description;
    const weatherDescription4 = data.list[24].weather[0].description;
    const weatherDescription5 = data.list[32].weather[0].description;
    const weatherDescription6 = data.list[39].weather[0].description;
    console.log(weatherDescription);
    console.log(weatherDescription2);

    const humidity = data.list[0].main.humidity;
    const pressure = data.list[0].main.pressure;
    const windSpeed = data.list[0].wind.speed;

    // const { speed } = data.wind;
    setWeatherData({
      name,
      tempNow,
      tempDay1,
      tempDay2,
      tempDay3,
      tempDay4,
      tempDay5,
      time,
      weatherDescription,
      weatherDescription2,
      weatherDescription3,
      weatherDescription4,
      weatherDescription5,
      weatherDescription6,
      humidity,
      pressure,
      windSpeed,
    });

    const currentHour = new Date().getHours();
    const dayTime = currentHour > 5 && currentHour < 19 ? true : false;
    console.log(currentHour);
    console.log(dayTime);

    switch (weatherDescription) {
      case "cielo sereno":
        dayTime ? setImage("DaySun") : setImage("NightMoon");
        break;
      case "nubi sparse":
      case "poche nuvole":
      case "cielo coperto":
      case "nebbia":
        dayTime ? setImage("DayClouds") : setImage("NightClouds");
        break;
      case "pioggia":
      case "pioggia moderata":
      case "pioggia leggera":
        dayTime ? setImage("DayRain") : setImage("NightRain");
        break;
      case "neve":
        dayTime ? setImage("DaySnow") : setImage("NightSnow");
        break;
      case "tempesta":
        dayTime ? setImage("DayStorm") : setImage("NightStorm");
        break;
      default:
        setImage("DaySun");
    }

    switch (weatherDescription2) {
      case "cielo sereno":
        dayTime ? setImageDay2("DaySun") : setImageDay2("NightMoon");
        break;
      case "nubi sparse":
      case "poche nuvole":
      case "cielo coperto":
      case "nebbia":
        dayTime ? setImageDay2("DayClouds") : setImageDay2("NightClouds");
        break;
      case "pioggia":
      case "pioggia moderata":
      case "pioggia leggera":
        dayTime ? setImageDay2("DayRain") : setImageDay2("NightRain");
        break;
      case "neve":
        dayTime ? setImageDay2("DaySnow") : setImageDay2("NightSnow");
        break;
      case "tempesta":
        dayTime ? setImageDay2("DayStorm") : setImageDay2("NightStorm");
        break;
      default:
        setImageDay2("DaySun");
    }

    switch (weatherDescription3) {
      case "cielo sereno":
        dayTime ? setImageDay3("DaySun") : setImageDay3("NightMoon");
        break;
      case "nubi sparse":
      case "poche nuvole":
      case "cielo coperto":
      case "nebbia":
        dayTime ? setImageDay3("DayClouds") : setImageDay3("NightClouds");
        break;
      case "pioggia":
      case "pioggia moderata":
      case "pioggia leggera":
        dayTime ? setImageDay3("DayRain") : setImageDay3("NightRain");
        break;
      case "neve":
        dayTime ? setImageDay3("DaySnow") : setImageDay3("NightSnow");
        break;
      case "tempesta":
        dayTime ? setImageDay3("DayStorm") : setImageDay3("NightStorm");
        break;
      default:
        setImageDay3("DaySun");
    }

    switch (weatherDescription4) {
      case "cielo sereno":
        dayTime ? setImageDay4("DaySun") : setImageDay4("NightMoon");
        break;
      case "nubi sparse":
      case "poche nuvole":
      case "cielo coperto":
      case "nebbia":
        dayTime ? setImageDay4("DayClouds") : setImageDay4("NightClouds");
        break;
      case "pioggia":
      case "pioggia moderata":
      case "pioggia leggera":
        dayTime ? setImageDay4("DayRain") : setImageDay4("NightRain");
        break;
      case "neve":
        dayTime ? setImageDay4("DaySnow") : setImageDay4("NightSnow");
        break;
      case "tempesta":
        dayTime ? setImageDay4("DayStorm") : setImageDay4("NightStorm");
        break;
      default:
        setImageDay4("DaySun");
    }

    switch (weatherDescription5) {
      case "cielo sereno":
        dayTime ? setImageDay5("DaySun") : setImageDay5("NightMoon");
        break;
      case "nubi sparse":
      case "poche nuvole":
      case "cielo coperto":
      case "nebbia":
        dayTime ? setImageDay5("DayClouds") : setImageDay5("NightClouds");
        break;
      case "pioggia":
      case "pioggia moderata":
      case "pioggia leggera":
        dayTime ? setImageDay5("DayRain") : setImageDay5("NightRain");
        break;
      case "neve":
        dayTime ? setImageDay5("DaySnow") : setImageDay5("NightSnow");
        break;
      case "tempesta":
        dayTime ? setImageDay5("DayStorm") : setImageDay5("NightStorm");
        break;
      default:
        setImageDay5("DaySun");
    }

    switch (weatherDescription6) {
      case "cielo sereno":
        dayTime ? setImageDay6("DaySun") : setImageDay6("NightMoon");
        break;
      case "nubi sparse":
      case "poche nuvole":
      case "cielo coperto":
      case "nebbia":
        dayTime ? setImageDay6("DayClouds") : setImageDay6("NightClouds");
        break;
      case "pioggia":
      case "pioggia moderata":
      case "pioggia leggera":
        dayTime ? setImageDay6("DayRain") : setImageDay6("NightRain");
        break;
      case "neve":
        dayTime ? setImageDay6("DaySnow") : setImageDay6("NightSnow");
        break;
      case "tempesta":
        dayTime ? setImageDay6("DayStorm") : setImageDay6("NightStorm");
        break;
      default:
        setImageDay6("DaySun");
    }
  }

  const currentHour = new Date().getHours();
  let sunnyBackground = "linear-gradient(to top, #60efff, #0061ff)";
  let nightBackground = "linear-gradient(to bottom, #08203e, #557c93)";

  useEffect(() => {
    fetchData();
    // sets background based on hour of day
    if (currentHour > 5 && currentHour < 19) {
      setBackGroundColor(sunnyBackground);
    } else {
      setBackGroundColor(nightBackground);
    }
  }, [cityName]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const location = weatherData.name;
  const tempNow = removeDecimal(weatherData.tempNow);
  const tempDay1 = removeDecimal(weatherData.tempDay1);
  const tempDay2 = removeDecimal(weatherData.tempDay2);
  const tempDay3 = removeDecimal(weatherData.tempDay3);
  const tempDay4 = removeDecimal(weatherData.tempDay4);
  const tempDay5 = removeDecimal(weatherData.tempDay5);
  const weatherDescription = weatherData.weatherDescription;
  const weatherDescriptionCapitalized =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  const currentHourMinute = currentTime();
  const humidity = weatherData.humidity;
  const pressure = weatherData.pressure;
  const windSpeed = weatherData.windSpeed;

  return (
    <div
      className={s.main}
      style={{
        backgroundImage: backGroundColor,
      }}
    >
      <Header>
        <CityNameInput onCityNameChange={handleCityNameChange} />
      </Header>
      <TodayWeather
        cityName={location}
        temp={tempNow}
        image={image}
        weatherDescription={weatherDescriptionCapitalized}
        humidity={humidity}
        pressure={pressure}
        windSpeed={windSpeed}
      />
      <div className={s.forecast}>
        <FutureDayWeather day="Domani" image={imageDay2} temp={tempDay1} />
        <FutureDayWeather day="Dopodomani" image={imageDay3} temp={tempDay2} />
        <FutureDayWeather
          day="Tra 3 giorni"
          image={imageDay4}
          temp={tempDay3}
        />
        <FutureDayWeather
          day="Tra 4 giorni"
          image={imageDay5}
          temp={tempDay4}
        />
        <FutureDayWeather
          day="Tra 5 giorni"
          image={imageDay6}
          temp={tempDay5}
        />
      </div>
    </div>
  );
}
