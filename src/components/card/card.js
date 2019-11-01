import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
function ACard(props) {
  const { deleteCity, loading} = props;
  const { city, id, imainTemp, pressure, rain } = props.data;

if(loading){
  return <Spinner />
}
  return (
    <Card key={id} style={{ width: '17rem' }}>
      <Card.Body>
        <Card.Title>The weather in {city} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The temp is the following {imainTemp}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">The pressure is the following {pressure}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Now we have {rain}</Card.Subtitle>
        <Link to={`/${city}`}>Show detele info</Link>
        <button onClick={() => deleteCity(city)}>Delete a city</button>
        {/* <button onClick={()=> fetchCitySuccess(city)}>Reload the card</button>  */}
      </Card.Body>
    </Card>
  )
}
export default ACard
