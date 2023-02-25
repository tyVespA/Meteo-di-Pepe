import s from "../styles/todayWeather.module.css";

export default function TodayWeather({ cityName, temp }) {
  return (
    <div className={s.todayWeather}>
      <p>{cityName}</p>
      <p>{temp}</p>
    </div>
  );
}
