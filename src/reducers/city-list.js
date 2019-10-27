import _ from 'lodash';
const updateCitisList = (state, action) => {

  
  const transformData = (peyload) => {
    const transData = [{
        id: peyload.id,
        city: peyload.name,
        mainTemp: peyload.main.temp,
        pressure: peyload.main.pressure,
        rain: peyload.weather[0].main,
        mainArr: peyload.main,
        weatherArr: peyload.weather,
      }]
      console.log(transData);
    console.log(_.mapKeys(transData, 'city'))

    return {
      ..._.mapKeys(transData, 'city')
    }
  }
  const currentCityName = (data) => {
    return data.name
  }
  if (state === undefined) {
    return {
      citis: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_CITIS_REQUEST':
      return {
        ...state,
        citis: {},
        loading: true,
        error: null
      };

    case 'FETCH_CITIS_SUCCESS':
      return {
        ...state,
        citis:{...state.citis, ...transformData(action.payload)},
        currentCity:  currentCityName(action.payload),
        loading: false,
        error: null
      };

    case 'FETCH_CITIS_FAILURE':
      return {
        citis: {},
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default updateCitisList;