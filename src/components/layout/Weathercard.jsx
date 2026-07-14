import React, { useEffect, useState } from "react";
import { FiMapPin, FiWind, FiDroplet } from "react-icons/fi";
import { getCurrentWeather } from "../../services/weatherServices";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    setLoading(true);

    const result = await getCurrentWeather();

    if (result.success) {
      setWeather(result.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(fetchWeather, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="mb-5 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 p-5 animate-pulse">
        <div className="h-6 w-28 rounded bg-white/30"></div>
        <div className="mt-5 h-12 w-20 rounded bg-white/30"></div>
        <div className="mt-5 h-5 w-full rounded bg-white/30"></div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="mb-5 rounded-2xl bg-slate-800 p-5 text-center text-gray-400">
        Unable to load weather.
      </div>
    );
  }

  return (
    <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-5 shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          🌤 Weather
        </h2>

        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="h-14 w-14"
        />
      </div>

      {/* Temperature */}
      <h1 className="mt-2 text-5xl font-bold text-white">
        {Math.round(weather.temperature)}°
      </h1>

      <p className="text-sm capitalize text-blue-100">
        {weather.description}
      </p>

      {/* City */}
      <div className="mt-4 flex items-center gap-2 text-blue-100">
        <FiMapPin />

        <span>
          {weather.city}, {weather.country}
        </span>
      </div>

      {/* Details */}
      <div className="mt-5 grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
          <p className="text-xs text-blue-100">
            Feels Like
          </p>

          <h3 className="mt-1 font-semibold text-white">
            {Math.round(weather.feelsLike)}°
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-1 text-blue-100">
            <FiDroplet />
            <span className="text-xs">Humidity</span>
          </div>

          <h3 className="mt-1 font-semibold text-white">
            {weather.humidity}%
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-1 text-blue-100">
            <FiWind />
            <span className="text-xs">Wind</span>
          </div>

          <h3 className="mt-1 font-semibold text-white">
            {weather.windSpeed} km/h
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
          <p className="text-xs text-blue-100">
            Pressure
          </p>

          <h3 className="mt-1 font-semibold text-white">
            {weather.pressure}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default WeatherCard;