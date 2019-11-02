import React from 'react';
import _ from 'lodash';

export const compose = (...funcs) => (comp) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), comp);
};

export const transformData = (peyload) => {
  const transData = [{
      id: peyload.id,
      city: peyload.name,
      mainTemp: peyload.main.temp,
      pressure: peyload.main.pressure,
      rain: peyload.weather[0].main,
      mainArr: peyload.main,
      weatherArr: peyload.weather,
    }]
  return {
    ..._.mapKeys(transData, 'city')
  }
}
export const deleteCite = (prevstate, city) => {
  return _.omit(prevstate, city);
}
export const updateCurrentCity = (data) => {
  const transData = {
    id: data.id,
    city: data.name,
    mainTemp: data.main.temp,
    pressure: data.main.pressure,
    rain: data.weather[0].main,
    mainArr: data.main,
    weatherArr: data.weather,
  }
  const cards = JSON.parse(localStorage.getItem('cards'));
  const transformDataFormLs = Object.values(cards);
  const inx = transformDataFormLs.findIndex(item => item.city === transData.city);
  const newUpdatedArr = [
      ...transformDataFormLs.slice(0, inx),
      transData, 
      ...transformDataFormLs.slice(inx+1)
  ]
  return  {
  ..._.mapKeys(newUpdatedArr, 'city')
  }

}
export const convertToProperWeatherFormat = (data) => {
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
const getCelsius = (data) => {
  let item = Math.floor(data - 273.15);
  return item;
}

export  const minmaxTemp = (min, max) => {
  if (max && min) {
    return (
      <h3 className='card-max-min'>
        <span className="mr-4">{getCelsius(min)}&deg;</span>
        <span>{getCelsius(max)}&deg;</span>
      </h3>
    );
  }
}