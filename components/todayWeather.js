import s from "../styles/todayWeather.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TodayWeather({ cityName, temp, weatherDescription }) {
  return (
    <div className={s.todayWeather}>
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
