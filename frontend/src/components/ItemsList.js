import React, { Component } from 'react';

import Item from './Item'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

import '../style/ItemList.css';

class ItemsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <Col md={4}>
                        <Form>
                            {this.props.items.map((item) => (
                                <Item
                                    key={item.id}
                                    item={item}
                                    onDeleteItem={this.props.onDeleteItem}
                                    onChangeItemName={this.props.onChangeItemName}
                                    onChangeItemPrice={this.props.onChangeItemPrice}
                                />
                            ))}
                        </Form>
                        <Button onClick={this.props.onAddItem}>
                            Add Item
                        </Button>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default ItemsList