import React, { Component } from 'react';

import Items from './Items'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import '../style/ItemList.css';

class ItemsList extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>

                <Col>
                    <Form>
                        {this.props.items.map((item) => (
                            <Items
                                item={item}
                                onDelete={this.props.onDelete}
                                changeName={this.props.changeName}
                                changePrice={this.props.changePrice}
                            />
                        ))}
                    </Form>
                    <Button onClick={this.props.onAdd}>
                        Add Item
                    </Button>
                    <Button>
                        Next
                    </Button>
                </Col>

            </div>
        );
    }
}

export default ItemsList