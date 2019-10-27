

// import Api from '../services/wether-forcast-service';
const API_KEY = 'f16f36f3944ac10ae9bea64d42adffa1';
export const fetchCity = (city) => async dispatch => {
    const apo_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
    const response = await apo_call.json();
    dispatch({
        type: 'FETCH_CITIS_SUCCESS',
        payload: response
    })
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
