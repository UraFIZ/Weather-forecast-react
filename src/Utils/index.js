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