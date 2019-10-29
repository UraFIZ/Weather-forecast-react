import React, { Component } from "react";
import './card-list.css';
import Card from '../card/card';
import { connect } from 'react-redux';
import {deleteCity} from '../../action'

class CardList extends Component {
// state = {
//   cards: [],
// }
// componentDidUpdate = () => {
//   if(this.state.cards !== this.props.transformData){
//   this.setState(() => {
//     return {
//       cards: this.props.transformData
//     }
//   }, () => {
//     localStorage.setItem('cards', JSON.stringify(this.props.transformData))
//   }
//   )
// }}
  render() {
    const areCardLS = JSON.parse(localStorage.getItem('cards') !== null);
    const cardsLS = areCardLS ? Object.values(JSON.parse(localStorage.getItem('cards'))) : [];
    const cities = cardsLS.map(item => {
        return (
         <Card key={item.id} data={item} deleteCity={this.props.deleteCity}/>
        )
      });
    return (
      <div className="cardContainer">
      {cities}
      </div>
    );
  }
}
const mapStateToProps = ({ cityList: {citis} }) => {

return {
  citis  
}
}

export default connect(mapStateToProps, {deleteCity})(CardList)
