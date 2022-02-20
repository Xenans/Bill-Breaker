import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import '../style/FoodSelection.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    clickHandler(item, fun, e) {
        fun(item.id, e);
        if (!!e.target.className.match(/^unchecked card-body$/)) {
            e.target.className = "checked card-body"
        }
        else {
            e.target.className = "unchecked card-body"
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Col>
                        {this.props.items.map((item) =>
                        (<Card
                            // style={{ width: '20rem' }}
                            onClick={(e) => this.clickHandler(item, this.props.onClick, e)}>
                            <Card.Body className='unchecked'>{item.name}: ${item.price}</Card.Body>
                        </Card>))}
                    </Col>
                </Container>
                <Link to="/addpeople" className="nextButton">
                    <Button>Next</Button>
                </Link>
            </>
        );
    }
}

export default Header