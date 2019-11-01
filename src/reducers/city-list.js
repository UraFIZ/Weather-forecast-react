import _ from 'lodash';
const updateCitisList = (state, action) => {

  const currentCityName = (data) => {
    return data.name
  }

  if (state === undefined) {
    return {
      citis: {},
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_INITIAL_DATA':
      return {
        ...state,
        citis: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_CITY_REQUEST':
      return {
        ...state,
        citis: {},
        loading: true,
        error: null
      };

    case 'FETCH_CITIS_SUCCESS':
      return {
        ...state,
        citis:{...state.citis, ...action.payload},
        currentCity:  currentCityName(action.payload),
        loading: false,
        error: null
      };

    case 'FETCH_CITIES_ERROR':
      return {
        citis: {},
        loading: false,
        error: action.payload
      };
    case 'DELETE_CITY':
      const {payload} = action;
      return {
        ...state,
        citis: payload,
      }  

    default:
      return state;
  }
};

export default updateCitisList;