import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 function ACard(props) {
     const {city, id, imainTemp, pressure, rain} = props.data;
    return (
        <Card key={id} style={{ width: '17rem' }}>
        <Card.Body>
          <Card.Title>The weather in {city} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">The temp is the following {imainTemp}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">The pressure is the following {pressure}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Now we have {rain}</Card.Subtitle>
          <Link to={`/${city}`}>Show detele info</Link>
          <button onClick={()=> props.deleteCity(city)}>Delete a city</button>
          {/* <Card.Link href="#">Show detele info</Card.Link>
          <Card.Link href="#">Delete a card</Card.Link> */}
        </Card.Body>
      </Card>
    )
}
export default ACard
