import WeatherList from "./list/WeatherList";
import cloudy from "./weather1.png";

export default function WeatherContainer(props) {
  const { data } = props;
  const date = new Date(data.location.localtime);
  return (
    <div className="flex pt-2">
      <div className="w-full sm:w-1/2 p-2 flex flex-col items-center">
        <div className="text-2xl font-bold text-gray-900">
          {date.getHours()}:{date.getMinutes()} AM
        </div>
        <div className="py-4">
          <img src={cloudy} alt="weather icon" width="80" />
        </div>
        <div className="font-medium mt-4">
          {data.current.condition.text}, {data.current.temp_c}
          <sup>o</sup> C
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <div className="font-medium text-lg">
          {weakDate[date.getDay()]}, {date.getDate()}{" "}
          {monthName[date.getMonth()].slice(0, 3)} {date.getFullYear()}
        </div>
        <WeatherList data={data}></WeatherList>
      </div>
    </div>
  );
}

const weakDate = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
