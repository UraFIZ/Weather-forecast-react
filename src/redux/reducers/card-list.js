const updateCardList = (state, action) => {
    if (state === undefined) {
        return {
          activeCity: {},
          loading: true,
          error: null
        };
      }
      switch (action.type) {
        case 'FETCH_SELECTED_CARD_SUCCESS':
          return {
            ...state,
            activeCity: action.payload,
            loading: false,
            error: null
          };
        default:
          return state;
    };
}
export default updateCardList;