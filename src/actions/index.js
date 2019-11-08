export const updateCity = data => ({ payload: data, type: 'UPDATE_CITY_DATA' });

export const fetchCityInit = data => ({ payload: data, type: 'FETCH_INITIAL_DATA' });

export const fetchCityRequest = () => ({ type: 'FETCH_CITY_REQUEST' });

export const fetchWeatherForHoursRequest = () => ({ type: 'FETCH_WEATHER_HAURS_REQUEST' });

export const fetchWeatherForHoursError = error => ({ payload: error, type: 'FETCH_WEATHER_HAURS_ERROR' });

export const fetchCityError = error => ({ payload: error, type: 'FETCH_CITIES_ERROR' });

export const fetchCitySuccessAction = city => ({ payload: city, type: 'FETCH_CITIS_SUCCESS' });

export const gainWetherForHours = cities => ({ payload: cities, type: 'GAIN_WETHER_FOR_HOURS' });

export const deleteCityAction = reduceData => ({ payload: reduceData, type: 'DELETE_CITY' });

export const fetchSelectedCardSuccess = response => ({ payload: response, type: 'FETCH_SELECTED_CARD_SUCCESS' });
