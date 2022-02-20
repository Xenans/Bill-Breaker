import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

import '../style/ItemList.css';

import Item from './Item'

class ItemsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <h3>Here is what we found</h3>
                    <Form>
                        {this.props.items.map((item) => (
                            <Item
                                item={item}
                                onDelete={this.props.onDelete}
                                onChangeItemName={this.props.onChangeItemName}
                                onChangeItemPrice={this.props.onChangeItemPrice}
                            />
                        ))}
                    </Form>

                    <Button onClick={() => this.props.onAdd()} >
                        Add Item
                    </Button>
                    <Link to="/addperson" className="nextButton">
                        <Button>Next</Button>
                    </Link>

                </Container>
            </>
        );
    }
}

export default ItemsList