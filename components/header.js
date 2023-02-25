import s from "../styles/header.module.css";
import Image from "next/image";
import pepeGif from "../public/images/feelsRain.gif";

export default function Header(props) {
  return (
    <div className={s.header}>
      <Image src={pepeGif} width={30} height={30} alt="rainy gif" />
      {props.children}
    </div>
  );
}
