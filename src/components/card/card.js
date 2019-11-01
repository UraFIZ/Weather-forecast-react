import React from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
function ACard(props) {
  const { deleteCity, loading, updateSelectedCard, data,} = props;
  const { city, id, mainTemp, pressure, rain } = data;

if(loading){
  return <div>...loading</div>
}
const dataToRender = (
  <Card.Body>
  <Card.Title>The weather in {city} </Card.Title>
  <Card.Subtitle className="mb-2 text-muted">The temp is the following {mainTemp}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted">The pressure is the following {pressure}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted">Now we have {rain}</Card.Subtitle>
  <Link to={`/${city}`}>Show detele info</Link>
  <button onClick={() => deleteCity(city)}>Delete a city</button>
  <button onClick={()=> updateSelectedCard(city)}>Reload the card</button> 
</Card.Body>
)
  return (
    <Card key={id} style={{ width: '17rem' }}>
      {dataToRender}
    </Card>
  )
}
const mapStateToProps = ({ cityList: { citis, error, loading } }) => {
  return {
    citis, error, loading
  }
}
export default connect(mapStateToProps)(ACard)
