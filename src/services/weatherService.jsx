import axios from 'axios';

const API_KEY = 'd02bf700ce53e367a828fee9c32ff4d1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
export const getForecast = async (city) => {
    try {
      const response = await axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      return response.data;
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      throw error;
    }
  };