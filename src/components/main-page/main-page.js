import React, { Component } from 'react'
import SerchBar from '../search-bar/search_bar';
import CardList from '../card-list/cardList';
import Logo from '../logo/logo'


 class MainPage extends Component {

    render() {
        return (
            <div>
                <Logo />
                <SerchBar />
                <CardList />
            </div>
        )
    }
}

export default MainPage
