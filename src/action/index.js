import {transformData, deleteCite, updateCurrentCity} from '../Utils'


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
    console.log(newObjectOfCity);
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
export const deleteCity = (city) => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const reduceData = deleteCite(cards,city);
    localStorage.setItem('cards', JSON.stringify(reduceData));
    return {
        type: 'DELETE_CITY',
        payload: reduceData, 
    }
}

const fetchCite = async (city) => {
    const API_KEY = 'f16f36f3944ac10ae9bea64d42adffa1';
    const apo_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
    if (!apo_call.ok) {
          fetchCityError(apo_call.status);
      }
    const response = await apo_call.json();
    return response;
}
export const fetchCitySuccess = (city) => async dispatch => {
    const response = await fetchCite(city);
    if(response.cod === '404') {
        dispatch(fetchCityError(response.message));
    }
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
        console.log('ls is empty');
         localStorage.setItem('cards', JSON.stringify(transformCity))
         dispatch(fetchCityRequest());
         dispatch(fetchCItyLoaded(transformCity))
      }
    
}
export const fetchSelectedCard = (city) => async dispatch => {
    const response = await fetchCite(city);
    dispatch({
        type: 'FETCH_SELECTED_CARD_SUCCESS',
        payload: response
    })
}
