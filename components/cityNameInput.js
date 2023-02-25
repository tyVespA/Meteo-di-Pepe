import { useState } from "react";

export default function CityNameInput({ onCityNameChange }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=9f83fc78fec54524b03472e33f9fdaf8`
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
    <form onSubmit={handleSubmit}>
      <label>
        City name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Get weather data</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
