import React, { Component } from 'react'

import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


class Items extends Component {

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
                                onChange={(e) => this.props.changeName(e.target.value, this.props.item.id)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Enter Price"
                                value={this.props.item.itemPrice}
                                onChange={(e) => this.props.changePrice(e.target.value, this.props.item.id)}
                            />
                        </Col>
                        <CloseButton onClick={() => this.props.onDelete(this.props.item.id)} />
                    </Row>
                </Form.Group>
            </>
        );
    }
}

// Items.defaultProps = {
//     itemName: 'Enter Name',
//     itemPrice: 'EnterPrice'
// }

export default Items