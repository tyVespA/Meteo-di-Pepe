import { useState } from "react";

export default function CityNameInput({ cityName, setCityName }) {
  function log(e) {
    e.preventDefault;
    console.log(e);
  }
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(cityName);
        }}
      >
        <label htmlFor="cityName">City:</label>
        <input
          type="text"
          id="cityName"
          placeholder="Milano"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button>ok</button>
      </form>
    </>
  );
}
