import React from 'react';
import { connect } from 'react-redux';
import '../styles/error-indicator.css';

const ErrorIndicator = ({errorFormCity, errorFromCard }) => {
  return <div className="text-error">{errorFormCity}, {errorFromCard}</div>
};

const mapStateToProps = ({cityList: {error}, cardList: {errorMes}}) => {
  return {
     errorFormCity: error,
     errorFromCard: errorMes
  }
  }
export default connect(mapStateToProps)(ErrorIndicator)

