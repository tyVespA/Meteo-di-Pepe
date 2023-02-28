export default function FutureDayWeather({ day, temp, image }) {
  return (
    <div>
      <h3>{day}</h3>
      <p>image: {image}</p>
      <p>temp: {temp}</p>
    </div>
  );
}
