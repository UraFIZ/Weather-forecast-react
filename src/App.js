import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/main-page/main-page';
import CardDetaile from './components/card-detaile/card-detaile'
import { Container } from 'react-bootstrap';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
      <Container className="mainContainer">
         <Switch>
         <Route
          path="/:id"
          component={CardDetaile}
          />
         <Route
          path="/"
          component={MainPage}
           />
         </Switch>
      </Container>
    );
  }
}

export default App;
