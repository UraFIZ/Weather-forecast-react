import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import './card-list.css';
import Card from '../card/card';
import { connect } from 'react-redux';
import { deleteCity, fetchCitySuccess, fetchCItyLoaded, fetchInitialDataFormLS } from '../../action';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
class CardList extends Component {

  componentDidMount() {
this.props.fetchInitialDataFormLS()
  }
  render() {
    const {citis, error, loading } = this.props;
 
    const transformObjOfArr = (citis !== null) ? Object.values(citis) : [];
    const cardsOfCitis = transformObjOfArr.map(item => {
      return (
        <Card key={item.id} data={item} deleteCity={this.props.deleteCity} loading={loading} />
      )
    });
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    console.log(loading);
    return (
      <div className="cardContainer">
        {cardsOfCitis}
      </div>
    );
  }
}
const mapStateToProps = ({ cityList: { citis, error, loading } }) => {
  return {
    citis, error, loading
  }
}
const mapDispatchToProps = (dispatch) => {
  const cards = JSON.parse(localStorage.getItem('cards'));
  const convertObjToArr = cards !==null ? Object.keys(cards): null;
  console.log(cards);
  return bindActionCreators({
    deleteCity: deleteCity,
    fetchInitialDataFormLS: fetchInitialDataFormLS(convertObjToArr)
  }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(CardList)
