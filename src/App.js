import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/main-page';
import CardDetaile from './containers/card-detaile'
import './App.css';
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
