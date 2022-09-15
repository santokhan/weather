import WeatherListItem from "./item/WeatherListItem";

export default function WeatherList(props) {
  const { data } = props;

  return (
    <ul>
      <WeatherListItem data={data}></WeatherListItem>
    </ul>
  );
}
