const updateCardList = (state, action) => {
    if (state === undefined) {
        return {
          activeCity: {},
          chartData: {}
        };
      }
      switch (action.type) {
        case 'FETCH_SELECTED_CARD_SUCCESS':
          return {
            ...state,
            activeCity: action.payload,
          };
          case 'GAIN_WETHER_FOR_HOURS':
            return {
              ...state,
              chartData: action.payload
            }
          
        default:
          return state;
    };
}
export default updateCardList;