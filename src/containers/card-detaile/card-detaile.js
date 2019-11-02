import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSelectedCard } from '../../redux/action';
import './card.detaile.css';

 class CardDetaile extends Component {

    componentDidMount = () => {
    const { id } = this.props.match.params;
        this.props.fetchSelectedCard(id);
    }

    render() {
        return (
            <div className="section-detailse">
                <Link to="/">Back to Index</Link> 
                     <div>{this.props.city.name}</div>
            </div>
        )
    }
}

const mapStateToProps = ({cardList}) => {
return {city: cardList.activeCity}
}

export default connect(mapStateToProps, {fetchSelectedCard})(CardDetaile)
