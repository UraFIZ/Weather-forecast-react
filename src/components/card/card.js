import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './card.css';
function ACard(props) {
  const { deleteCity, updateSelectedCard, data, } = props;
  const { city, id, mainArr, weatherArr, pressure, rain } = data;
  const { temp_min, temp_max, humidity } = mainArr
  const { main } = weatherArr[0];
  const getCelsius = (data) => {
    let item = Math.floor(data - 273.15);
    return item;
  }
  const convertToProperWeatherFormat = (data) => {
    switch (data) {
      case "Clouds": {
        return "wi-day-cloudy"
      }
      case "Clear": {
        return "wi-day-sunny"
      }
      case "Fog": {
        return "wi-day-fog"
      }
      case "Mist": {
        return "wi-day-fog"
      }
      case "Haze": {
        return "wi-day-haze"
      }
      case "Dust": {
        return "wi-dust"
      }
      case "Smoke": {
        return "wi-smog"
      }
      case "Drizzle": {
        return "wi-showers"
      }
      case "Rain": {
        return "wi-rain"
      }
      case "Snow": {
        return "wi-snow"
      }
      case "Thunderstorm": {
        return "wi-day-thunderstorm"
      }
      default:
        return "sunny"
    }
  }
  const minmaxTemp = (min, max) => {
    if (max && min) {
      return (
        <h3 className='card-max-min'>
          <span className="mr-4">{getCelsius(min)}&deg;</span>
          <span>{getCelsius(max)}&deg;</span>
        </h3>
      );
    }
  }
  const dataToRender = (
    <div key={id} className="card">
      <div className="card-side card-side--front card-side--front-color">
        <div className={`card-picture card-picture-${main}`}>
        </div>
        <div className='card-heading'>
          <span className="card-heading-span card-heading-color ">
            {city}
          </span>
        </div>
        <div className="card-weather-data">
          {minmaxTemp(temp_min, temp_max)}
          <div className="mb-2 text-muted">the pressure is <span className="card-strong-text">{pressure}</span> </div>
          <div className="card-strong-text">{rain}</div>
        </div>

      </div>
      <div className="card-side card-side--back card-side--back-color">
        <div className="card-box-up">
          <i className={`wi ${convertToProperWeatherFormat(main)}`}></i>
        </div>
        <div className="card-box-down">
          <button className="card-btn" onClick={() => deleteCity(city)}>Delete a city</button>
          <button className="card-btn" onClick={() => updateSelectedCard(city)}>Reload the card</button>
          <Link className="card-btn" to={`/${city}`}>Show detele info</Link>
        </div>
      </div>
    </div>
  )
  return (
    <Fragment>
      {dataToRender}
    </Fragment>
  )
}
const mapStateToProps = ({ cityList: { citis, error, loading } }) => {
  return {
    citis, error, loading
  }
}
export default connect(mapStateToProps)(ACard)
