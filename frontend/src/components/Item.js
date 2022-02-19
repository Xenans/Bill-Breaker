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
                                value={this.props.item.itemName}
                                onChange={(e) => this.props.onChangeItemName(e.target.value, this.props.item.id)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Enter Price"
                                value={this.props.item.itemPrice}
                                onChange={(e) => this.props.onChangeItemPrice(e.target.value, this.props.item.id)}
                            />
                        </Col>
                        <Col>
                            <CloseButton onClick={() => this.props.onDeleteItem(this.props.item.id)} />
                        </Col>
                    </Row>
                </Form.Group>
            </>
        );
    }
}

export default Item