import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCity } from '../../action';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './search-bar.css';

class SearchBar extends Component {
    state = {
        value: '',
        data: this.props.data,
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (event) => {
        this.props.fetchCity(this.state.value)
        this.setState({value: ''});
        event.preventDefault();
    }
    render() {
        return (
                <Row className="rowContainer">
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="text" placeholder="Enter the city for wether forecost" onChange={this.handleChange} />
                            <Button type="submit" variant="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>


        )
    }
}


export default connect(null, {fetchCity})(SearchBar) 
