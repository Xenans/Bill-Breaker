import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import '../style/FoodSelection.css';

class Header extends Component {

    // props:
    // - onSelectItem -> addItemToUser(userId, itemId)
    // - items
    // - user
    constructor(props) {
        super(props);
    }

    clickHandler(item, e) {
        this.props.onClick(item.id, e);

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
                                <Card
                                    onClick={(e) => this.clickHandler(item, e)}>
                                    <Card.Body className='unchecked'>{item.name}: ${item.price}</Card.Body>
                                </Card>
                            )
                        }
                    </Col>
                </Container>
                <Link to="/addPerson" className="nextButton">
                    <Button>Next</Button>
                </Link>
            </>
        );
    }
}

export default Header