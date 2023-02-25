import s from "../styles/todayWeather.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TodayWeather({ cityName, temp, weatherDescription }) {
  // TODO: set up backgroundColor based on time and weather
  const backgroundColor = "#0648F1";
  // TODO: set up icon based weather
  // const icon = ...
  return (
    <div
      className={s.todayWeather}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={s.location}>
        <LocationOnIcon /> {cityName}
      </div>
      <div>
        <p className={s.temp}>{temp}</p>
      </div>
      <p>{weatherDescription}</p>
    </div>
  );
}
