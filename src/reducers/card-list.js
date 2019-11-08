const updateCardList = (state, action) => {
    if (state === undefined) {
        return {
          loading: false,
          error: {},
          activeCity: {},
          chartData: {}
        };
      }
      switch (action.type) {
        case 'FETCH_WEATHER_HAURS_REQUEST':
          return {
            ...state,
            error: {},
            loading: true
          }
        case 'FETCH_SELECTED_CARD_SUCCESS':
          return {
            ...state,
            loading: false,
            activeCity: action.payload,
          };
          case 'FETCH_WEATHER_HAURS_ERROR': 
          return {
            ...state,
            loading: false,
            error: action.payload
          }
          case 'GAIN_WETHER_FOR_HOURS':
            return {
              ...state,
              loading: false,
              chartData: action.payload
            }
          
        default:
          return state;
    };
}
export default updateCardList;