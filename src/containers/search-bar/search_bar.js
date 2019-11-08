import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { fetchCitySuccess } from '../../redux/action';
import '../../styles/search-bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {

    state = {
        value: '',
        data: this.props.data,
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        this.props.fetchCitySuccess(this.state.value)
        this.setState({value: ''});
        event.preventDefault();
    }
    render() {
        return (
            <Row className="rowContainer">
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control type="text" placeholder="Enter the city for wether forecost" onChange={this.handleChange} />
                        <Button className="btn-main" type="submit" variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}


export default connect(null, {fetchCitySuccess})(SearchBar)
