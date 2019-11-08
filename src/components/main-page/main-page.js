import React, { Component } from 'react'
import SerchBar from '../../containers/search_bar';
import CardList from '../../containers/cardList';
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
