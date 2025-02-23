import '../App.css'
import PropTypes from 'prop-types'
const Forecast = ({ forecast }) => {
    if (!forecast || !forecast.list) return <div>Chargement des prévisions...</div>;
  
    const dailyForecasts = forecast.list.reduce((acc, item) => {
      const date = item.dt_txt.split(' ')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});
  
    return (
      <div className="mt-4">
        <h3>Prévisions sur 5 jours</h3>
        {Object.keys(dailyForecasts).map((date) => (
          <div key={date} className="card mb-3">
            <div className="card-header">
              <h4>{new Date(date).toLocaleDateString()}</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {dailyForecasts[date].map((item, index) => (
                  <li key={index} className="list-group-item">
                    <p>Heure: {item.dt_txt.split(' ')[1]}</p>
                    <p>Température: {item.main.temp}°C</p>
                    <p>Conditions: {item.weather[0].description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
Forecast.propTypes={
    forecast:{
        list:PropTypes.array.isRequired
    }
}
export default Forecast