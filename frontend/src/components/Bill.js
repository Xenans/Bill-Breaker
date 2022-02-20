import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

import '../style/Bill.css';
import { Link } from 'react-router-dom'

class Bill extends Component {


    constructor(props) {
        super(props);
    }

    calculatePrice(id) {
        let total = 0
        const user = this.props.users.find(user => user.id === id)
        for (const itemId of user.items) {
            const item = this.props.items.find(item => item.id === itemId)
            total += Number(item.price) / item.users.length
        }

        return Math.round(total * 100) / 100
    }

    render() {
        return (
            <>

                <Container>
                    <Col md={{ span: 4, offset: 2 }}>
                        <h1>Here are the results</h1>
                        {this.props.users.map((user) => (
                            <Card>
                                <Card.Body className="cardStyle">
                                    <Container>
                                        <Row>
                                            <Col md={4}>{user.name}: </Col>
                                            <Col md={{ span: 4, offset: 4 }}>${this.calculatePrice(user.id)}</Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Container>

            </>
        );
    }
}


export default Bill