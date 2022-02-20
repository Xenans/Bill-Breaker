import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import '../style/FoodSelection.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <Col>
                        {this.props.items.map((item) =>
                        (<Card
                            // style={{ width: '20rem' }}
                            onClick={() => this.props.onClick(item.itemName, this)}>
                            <Card.Body>{item.itemName}: ${item.itemPrice}</Card.Body>
                        </Card>))}
                    </Col>
                </Container>
                <Link to="/additems" className="nextButton">Next</Link>
            </>
        );
    }
}

export default Header