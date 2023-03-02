import s from "../styles/todayWeather.module.css";
import Image from "next/image";
import AirIcon from "@mui/icons-material/Air";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import WaterIcon from "@mui/icons-material/Water";

export default function TodayWeather({
  cityName,
  temp,
  image,
  weatherDescription,
  currentHourMinute,
  humidity,
  pressure,
  windSpeed,
}) {
  return (
    <div className={s.todayWeather}>
      <div className={s.location}>{cityName}</div>
      <div>
        <p className={s.temp}>{temp}°</p>
      </div>
      <Image
        src={`/images/${image}.png`}
        // src={sunAndCloudsImg}
        width={250}
        height={250}
        alt="weather image"
        priority={true}
        loading="eager"
        style={{
          marginInline: "auto",
          marginBlock: "5px",
          filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
        }}
      />
      <p className={s.weatherDescription}>{weatherDescription}</p>
      <div className={s.stats}>
        <div className={s.stat}>
          <InvertColorsIcon fontSize="large" />
          <p>{humidity} %</p>
          <p className={s.statType}>Umidità</p>
        </div>
        <div className={s.stat}>
          <WaterIcon fontSize="large" />
          <p>{pressure} hPa</p>
          <p className={s.statType}>Pressione </p>
        </div>
        <div className={s.stat}>
          <AirIcon fontSize="large" />
          <p>{windSpeed} m/s</p>
          <p className={s.statType}>Vento</p>
        </div>
      </div>
    </div>
  );
}
