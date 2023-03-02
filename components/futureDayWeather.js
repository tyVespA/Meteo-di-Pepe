import Image from "next/image";
import s from "../styles/futureDayWeather.module.css";

export default function FutureDayWeather({ day, temp, image }) {
  return (
    <div className={s.futureDayWeather}>
      <h3>{day}</h3>
      <Image
        src={`/images/${image}.png`}
        // src={sunAndCloudsImg}
        width={50}
        height={50}
        alt="weather image"
        priority={true}
        loading="eager"
        style={{ marginInline: "auto", marginBlock: "5px" }}
      />
      <p>{temp}°</p>
    </div>
  );
}
