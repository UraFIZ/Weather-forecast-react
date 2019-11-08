import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/card.css';
import { convertToProperWeatherFormat, minmaxTemp } from '../library/Util';

function Card(props) {
  const { deleteCity, updateSelectedCard, data} = props;
  const { city, id, mainArr, weatherArr, pressure, rain } = data;
  const { temp_min, temp_max } = mainArr
  const { main } = weatherArr[0];

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
          <i className={`wi ${convertToProperWeatherFormat(main)}`} />
        </div>
        <div className="card-box-down">
          <button className="card-btn" onClick={() => deleteCity(city)}>Delete a city</button>
          <button className="card-btn" onClick={() => updateSelectedCard(city)}>Reload the card</button>
          <Link  className="card-btn" to={`/${city}`}>Show detele info</Link>
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

export default connect(mapStateToProps)(Card)
