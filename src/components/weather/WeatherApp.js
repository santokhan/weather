import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherContainer from "./container/WeatherContainer";

export default function Weather() {
  const [data, setdata] = useState(null);
  let URI = "http://localhost:80/weather/";
  // URI ="https://api.weatherapi.com/v1/current.json?key=3bcf74a6f79c4d00ae185227221509&q=London&aqi=no";

  useEffect(() => {
    axios.get(URI).then((res) => {
      setdata(res.data);
    });
  });

  if (data) {
    return (
      <div className="w-full max-w-xl Poppins bg-white shadow rounded p-4">
        <div className="text-2xl font-medium text-gray-900">Weather</div>
        <WeatherContainer data={data}></WeatherContainer>
      </div>
    );
  }
}
