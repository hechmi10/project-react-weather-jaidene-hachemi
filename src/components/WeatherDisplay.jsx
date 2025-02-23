import '../App.css'
import PropTypes from 'prop-types'
const WeatherDisplay = ({ weather }) => {
    if (!weather) return <div>Chargement...</div>;
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <p>Température: {weather.main.temp}°C</p>
        <p>Conditions: {weather.weather[0].description}</p>
        <p>Humidité: {weather.main.humidity}%</p>
        <p>Vitesse du vent: {weather.wind.speed} m/s</p>
      </div>
    );
  };
WeatherDisplay.propTypes={
    weather:{
        name:PropTypes.string.isRequired,
        main:{
            temp:PropTypes.number.isRequired,
            humidity:PropTypes.string.isRequired
        },
        weather:PropTypes.array.isRequired={
            description:PropTypes.string.isRequired
        },
        wind:{
            speed:PropTypes.number.isRequired
        }
    }
}
export default WeatherDisplay