import React, { Component } from 'react'
import SerchBar from '../search-bar/search_bar';
import CardList from '../card-list/cardList';



 class MainPage extends Component {

    render() {
        return (
            <div>
                <SerchBar />
                <CardList />
            </div>
        )
    }
}

export default MainPage
