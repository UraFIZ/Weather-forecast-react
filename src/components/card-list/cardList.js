import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import './card-list.css';
import Card from '../card/card';
import { connect } from 'react-redux';
import { deleteCity, updateSelectedCard, fetchInitialDataFormLS } from '../../action';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
class CardList extends Component {

  componentDidMount() {
this.props.fetchInitialDataFormLS()
  }
  render() {
    const {citis, error, loading, updateSelectedCard } = this.props;
 
    const transformObjOfArr = (citis !== null) ? Object.values(citis) : [];
    const cardsOfCitis = transformObjOfArr.map(item => {
      return (
        <Card key={item.id} data={item} deleteCity={this.props.deleteCity} updateSelectedCard={updateSelectedCard}/>
      )
    });
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
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
  return bindActionCreators({
    deleteCity: deleteCity,
    fetchInitialDataFormLS: fetchInitialDataFormLS(convertObjToArr),
    updateSelectedCard: updateSelectedCard
  }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(CardList)
