import s from "../styles/header.module.css";

export default function Header(props) {
  return (
    <div className={s.header}>
      <p>Logo</p>
      {props.children}
    </div>
  );
}
