const cors = require("cors");
const express = require("express");
const app = express();
const port = 4001;

const weatherdata = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1663240559,
    localtime: "2022-09-15 12:15",
  },
  current: {
    last_updated_epoch: 1663239600,
    last_updated: "2022-09-15 12:00",
    temp_c: 16.0,
    temp_f: 60.8,
    is_day: 1,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 5.6,
    wind_kph: 9.0,
    wind_degree: 310,
    wind_dir: "NW",
    pressure_mb: 1013.0,
    pressure_in: 29.91,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 68,
    cloud: 50,
    feelslike_c: 16.0,
    feelslike_f: 60.8,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 4.0,
    gust_mph: 7.8,
    gust_kph: 12.6,
  },
};

app.use(cors());

app.use("/weatherdata", (req, res) => {
  res.json(weatherdata);
});

app.listen(port, () => console.log(`Local: http://localhost:${port}`));
