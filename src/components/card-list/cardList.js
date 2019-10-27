import React, { Component } from "react";
import './card-list.css';
import Card from '../card/card';
import { connect } from 'react-redux';

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
         <Card data={item}/>
        )
      });
    return (
      <div className="cardContainer">
      {cities}
      </div>
    );
  }
}
const mapStateToProps = ({ cityList: {citis, currentCity} }) => {
  if(JSON.parse(localStorage.getItem('cards') !== null)){
    const citisFromLS = JSON.parse(localStorage.getItem('cards'));
    if(citisFromLS[currentCity] === undefined) {
      localStorage.setItem('cards', JSON.stringify(citis));
    }
  }else{
      Object.entries(citis).length !== 0 && localStorage.setItem('cards', JSON.stringify(citis))
  }
return {
  citis  
}
}

export default connect(mapStateToProps)(CardList)
