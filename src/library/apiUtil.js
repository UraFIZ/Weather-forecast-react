import {
    deleteCite,
    fetchCity,
    fetchWeatherForHours,
    formatObjectToCreatChart,
    transformData,
    updateCurrentCity
} from './Util';
import {
    deleteCityAction,
    fetchCityError,
    fetchCityInit,
    fetchCitySuccessAction,
    fetchCityRequest,
    fetchSelectedCardSuccess,
    fetchWeatherForHoursError,
    fetchWeatherForHoursRequest,
    gainWetherForHours,
    updateCity,
} from '../actions';

export const fetchInitialDataFormLS = (data) => () => (dispatch) =>{
    if(data !== null && Object.entries(data).length !== 0 ) {
        dispatch(fetchCityRequest())
        data.map(item => dispatch(fetchCitySuccess(item)))
    }else{
        const cards = JSON.parse(localStorage.getItem('cards'));
        dispatch(fetchCityInit(cards));
    }
};

export const updateSelectedCard =(city) => async (dispatch) => {
    const resopnce = await fetchCity(city);
    const newObjectOfCity = updateCurrentCity(resopnce);
    localStorage.setItem('cards', JSON.stringify(newObjectOfCity));
    dispatch(fetchCityRequest());
    setTimeout(() => dispatch(updateCity(newObjectOfCity)), 800);
};

export const fetchCitySuccess = (city) => async dispatch => {
    const response = await fetchCity(city);
    if(response.cod !==200) {
        dispatch(fetchCityError(response.message));
    }else{
        const transformCity = transformData(response)
        if(JSON.parse(localStorage.getItem('cards') !== null)){
            const citisFromLS = JSON.parse(localStorage.getItem('cards'));
            if(citisFromLS[transformCity.name] === undefined) {
                const newCitis = Object.assign({},citisFromLS,  transformCity)
                localStorage.setItem('cards', JSON.stringify(newCitis));
                dispatch(fetchCityRequest());
                dispatch(fetchCitySuccessAction(newCitis))
            }
        }else{
            localStorage.setItem('cards', JSON.stringify(transformCity))
            dispatch(fetchCityRequest());
            dispatch(fetchCitySuccessAction(transformCity))
        }
    }
};

export const fetchWeatherForHoursinDay = (city) => async dispatch => {
    const response = await fetchWeatherForHours(city);
    if(response === undefined || response.cod !== "200") {
        dispatch(fetchWeatherForHoursError(response));
    }else{
        dispatch(fetchWeatherForHoursRequest())
        dispatch(gainWetherForHours(formatObjectToCreatChart(response.list)))
    }
};

export const fetchSelectedCard = (city) => async dispatch => {
    const response = await fetchCity(city);
    dispatch(fetchSelectedCardSuccess(response));
};

export const deleteCity = (city) => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const reduceData = deleteCite(cards,city);
    localStorage.setItem('cards', JSON.stringify(reduceData));

    return deleteCityAction(reduceData);
};