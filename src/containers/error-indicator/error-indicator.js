import React from 'react';
import './error-indicator.css';
import { connect } from 'react-redux';

const ErrorIndicator = ({errorFormCity, errorFromCard }) => {
  return <div>{errorFormCity}, {errorFromCard}</div>
};

const mapStateToProps = ({cityList: {error}, cardList: {errorMes}}) => {
  return {
     errorFormCity: error,
     errorFromCard: errorMes
  }
  }
export default connect(mapStateToProps)(ErrorIndicator)

