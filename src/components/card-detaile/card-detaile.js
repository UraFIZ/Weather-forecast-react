import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSelectedCard } from '../../action'
import { Link } from 'react-router-dom';

 class CardDetaile extends Component {
     componentDidMount = () => {
        const { id } = this.props.match.params;
         this.props.fetchSelectedCard(id);
     }
    render() {
        return (
            <div>
               <Link to="/">Back to Index</Link> 
            </div>
        )
    }
}
const mapStateToProps = ({cardList}, ownProps) => {
console.log(cardList);
console.log(ownProps);
return {city: cardList.city
}
}
export default connect(mapStateToProps, {fetchSelectedCard})(CardDetaile)
