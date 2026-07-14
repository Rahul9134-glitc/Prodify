import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getCurrentWeather = async (city = "Gorakhpur") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return {
      success: true,
      data: {
        city: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        windSpeed: response.data.wind.speed,
        weather: response.data.weather[0].main,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
      },
    };
  } catch (error) {
    console.error("Weather API Error:", error);

    return {
      success: false,
      message: error.response?.data?.message || "Unable to fetch weather",
    };
  }
};