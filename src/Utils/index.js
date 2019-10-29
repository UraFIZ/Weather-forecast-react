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