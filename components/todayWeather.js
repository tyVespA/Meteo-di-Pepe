import s from "../styles/todayWeather.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TodayWeather({
  cityName,
  temp,
  weatherDescription,
  currentHourMinute,
}) {
  return (
    <div className={s.todayWeather}>
      <div className={s.location}>{cityName}</div>
      <div>
        <p className={s.temp}>{temp}°</p>
      </div>
      <p className={s.weatherDescription}>{weatherDescription}</p>
      <p className={s.weatherDescription}>Time: {currentHourMinute}</p>
    </div>
  );
}
