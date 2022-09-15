export default function WeatherListItem(props) {
  const { data } = props;

  return (
    <li className="flex justify-between py-1">
      <div>10:10 AM</div>
      <div>
        {data.current.condition.text}, {data.current.temp_c}
        <sup>o</sup> C
      </div>
    </li>
  );
}
