import {transformData, deleteCite} from '../Utils'

export const fetchInitialDataFormLS = (data) => () => (dispatch) =>{
    if(data !== null && Object.entries(data).length !== 0 ) {
        console.log("object")
        dispatch(fetchCityRequest())
        data.map(item => dispatch(fetchCitySuccess(item)))
    }else{
        const cards = JSON.parse(localStorage.getItem('cards'));
        dispatch(fetchCityInit(cards));

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
export const deleteCity = (city) => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const reduceData = deleteCite(cards,city);
    localStorage.setItem('cards', JSON.stringify(reduceData));
    return {
        type: 'DELETE_CITY',
        payload: reduceData, 
    }
}
const API_KEY = 'f16f36f3944ac10ae9bea64d42adffa1';

export const fetchCitySuccess = (city) => async dispatch => {
    fetchCityRequest();
    const apo_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
    if (!apo_call.ok) {
          fetchCityError(apo_call.status);
      }
    const response = await apo_call.json();
    const transformCity = transformData(response)
    if(JSON.parse(localStorage.getItem('cards') !== null)){
        const citisFromLS = JSON.parse(localStorage.getItem('cards'));
        if(citisFromLS[response.name] === undefined) {
          console.log('enter')
         const newCites = Object.assign({},citisFromLS,  transformCity)
          localStorage.setItem('cards', JSON.stringify(newCites));
        }
      }else{
        console.log('ls is empty');
         localStorage.setItem('cards', JSON.stringify(transformCity))
      }
    dispatch(fetchCItyLoaded(transformCity))
}
export const fetchSelectedCard = (city) => async dispatch => {
    const apo_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
    const response = await apo_call.json();
    dispatch({
        type: 'FETCH_SELECTED_CARD_SUCCESS',
        payload: response
    })
}
