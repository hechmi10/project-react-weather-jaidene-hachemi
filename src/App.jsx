import{ useState, useEffect } from 'react';
import { getWeather, getForecast } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');

  const handleSearch = async (city) => {
    const weatherData = await getWeather(city);
    const forecastData = await getForecast(city);
    setWeather(weatherData);
    setForecast(forecastData);
  };

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, [city]);

  return (
    <div>
      <h1>Application Météo</h1>
      <SearchBar onSearch={setCity} />
      {weather && <WeatherDisplay weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;