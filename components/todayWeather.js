import s from "../styles/todayWeather.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

export default function TodayWeather({
  cityName,
  temp,
  image,
  weatherDescription,
  currentHourMinute,
}) {
  return (
    <div className={s.todayWeather}>
      <div className={s.location}>{cityName}</div>
      <div>
        <p className={s.temp}>{temp}°</p>
      </div>
      <Image
        src={`/images/${image}.svg`}
        // src={sunAndCloudsImg}
        width={93.19 * 3}
        height={78.71 * 3}
        alt="weather image"
        style={{ marginInline: "auto", marginBlock: "5px" }}
      />
      <p className={s.weatherDescription}>{weatherDescription}</p>
      <p className={s.weatherDescription}>Ore: {currentHourMinute}</p>
    </div>
  );
}
