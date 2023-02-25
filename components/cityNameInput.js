import { useState } from "react";
import s from "../styles/cityNameInput.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function CityNameInput({ onCityNameChange }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=9f83fc78fec54524b03472e33f9fdaf8`
      );
      const data = await response.json();
      if (data.cod === "404") {
        setErrorMessage(`No weather data found for city "${inputValue}"`);
      } else {
        onCityNameChange(inputValue);
        setErrorMessage("");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(`Error fetching weather data for city "${inputValue}"`);
    }
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.form}
      style={{ textAlign: "center" }}
    >
      <input
        id="cityNameInput"
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={s.inputField}
        placeholder="Milano"
      />
      <button type="submit" className={s.submitButton}>
        <SearchIcon className={s.searchIcon} />
      </button>
      {errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}
    </form>
  );
}
