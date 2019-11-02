import CardList from './card-list';
import CItyList from './city-list';
import { combineReducers } from 'redux';

export default combineReducers({
    cardList : CardList,
    cityList: CItyList
}) 