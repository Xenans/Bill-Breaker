import React, { Component } from 'react'

import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

class Item extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Form.Group className="mb-2">
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Enter Item"
                                value={this.props.item.name}
                                onChange={(e) => this.props.onChangeItemName(this.props.item.id, e.target.value)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Enter Price"
                                value={this.props.item.price}
                                onChange={(e) => this.props.onChangeItemPrice(this.props.item.id, e.target.value)}
                            />
                        </Col>
                        <CloseButton onClick={() => this.props.onDelete(this.props.item.id)} />
                    </Row>
                </Form.Group>
            </>
        );
    }
}

export default Item