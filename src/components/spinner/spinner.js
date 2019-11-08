import React from 'react';
import '../../styles/spinner.css';
import Spinner from 'react-bootstrap/Spinner'

const spinner = () => {
  return <Spinner className="spinner" animation="border" variant="success" />
};

export default spinner;
