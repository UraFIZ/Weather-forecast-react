import {transformData, deleteCite, updateCurrentCity, fetchWeatherForHours, fetchCite, formatObjectToCreatChart} from '../../Utils'



export const fetchInitialDataFormLS = (data) => () => (dispatch) =>{
    if(data !== null && Object.entries(data).length !== 0 ) {
        dispatch(fetchCityRequest())
        data.map(item => dispatch(fetchCitySuccess(item)))
    }else{
        const cards = JSON.parse(localStorage.getItem('cards'));
        dispatch(fetchCityInit(cards));

    } 
}
export const updateSelectedCard =(city) => async (dispatch) => {
    const resopnce = await fetchCite(city);
    const newObjectOfCity = updateCurrentCity(resopnce);
    localStorage.setItem('cards', JSON.stringify(newObjectOfCity));
    dispatch(fetchCityRequest());
    setTimeout(() => dispatch(updateCity(newObjectOfCity)), 800);
}
const updateCity = (data) => {
    return {
        type: 'UPDATE_CITY_DATA',
        payload: data
     }
}
const fetchCityInit = (data) => {
    return {
        type: 'FETCH_INITIAL_DATA',
        payload: data,
    }
}
const fetchCityRequest = () => {
    return {
        type: 'FETCH_CITY_REQUEST'
    }
}
const fetchCityError = (error) => {
    return {
        type: 'FETCH_CITIES_ERROR',
        payload: error
    }
}
export const fetchCItyLoaded = (city) => {
    return {
        type: 'FETCH_CITIS_SUCCESS',
        payload: city
    }
}
export const gainWetherForHours =(cities) => {
    return {
        type: 'GAIN_WETHER_FOR_HOURS',
        payload: cities
    }
}
export const deleteCity = (city) => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const reduceData = deleteCite(cards,city);
    localStorage.setItem('cards', JSON.stringify(reduceData));
    return {
        type: 'DELETE_CITY',
        payload: reduceData, 
    }
}



export const fetchCitySuccess = (city) => async dispatch => {
    const response = await fetchCite(city);
    if(response.cod === '404') {
        dispatch(fetchCityError(response.message));
    }else{
        const transformCity = transformData(response)
        if(JSON.parse(localStorage.getItem('cards') !== null)){
            const citisFromLS = JSON.parse(localStorage.getItem('cards'));
            if(citisFromLS[transformCity.name] === undefined) {
             const newCitis = Object.assign({},citisFromLS,  transformCity)
              localStorage.setItem('cards', JSON.stringify(newCitis));
              dispatch(fetchCityRequest());
              dispatch(fetchCItyLoaded(newCitis))
            }
          }else{
             localStorage.setItem('cards', JSON.stringify(transformCity))
             dispatch(fetchCityRequest());
             dispatch(fetchCItyLoaded(transformCity))
          }
    }
    
    
}
export const fetchWeatherForHoursinDay = (city) => async dispatch => {
    const response = await fetchWeatherForHours(city);
    if(response === undefined) {
        dispatch(fetchCityError(response));
    }else{
      dispatch(gainWetherForHours(formatObjectToCreatChart(response)))
    }
    
    
}
export const fetchSelectedCard = (city) => async dispatch => {
    const response = await fetchCite(city);
    dispatch({
        type: 'FETCH_SELECTED_CARD_SUCCESS',
        payload: response
    })
}
