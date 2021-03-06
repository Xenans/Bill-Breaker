import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class Summary extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    {this.props.users.map((user) => (
                        <SummaryList
                            user={user.name}
                            items={user.items.map((itemid) => (this.props.getItem(itemid)))}
                            onDelete={this.props.onDelete} 
                        />
                    ))}
                </Container>

                <h1>Remaining items:</h1>
                <SummaryList
                            user="Unpaid"
                            items={this.props.items.filter(item => item.users.length === 0)}
                            onDelete={this.props.onDelete} 
                        />

                <Link to="/bill" className="nextButton">
                    <Button>Next</Button>
                </Link>
            </>
        );
    }
}


class SummaryList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Form>
                    <h1>{this.props.user}</h1>
                    {this.props.items.map((item) => (
                        <SummaryListItem
                            item={item}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </Form>
            </Container>
        )
    }
}

class SummaryListItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Form.Group className="w-25 p-3">
                <Row>
                    <Col>
                        <Form.Control
                            type="text" readOnly
                            value={this.props.item.name}
                        />
                        <Form.Control
                            type="number" readOnly
                            value={this.props.item.price}
                        />
                    </Col>
                    <CloseButton onClick={() => this.props.onDelete(this.props.item.id)} />
                </Row>
            </Form.Group>
        )
    }
}



export default Summary