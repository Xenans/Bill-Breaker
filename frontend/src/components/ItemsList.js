import React, { Component } from 'react';

import Item from './Item'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import Form from 'react-bootstrap/Form'

import '../style/ItemList.css';
import { Link } from 'react-router-dom'

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

                    <div className="d-flex justify-content-between">
                        <Button onClick={this.props.onAdd}>
                            Add Item
                        </Button>
                        <Link to="/selectfood" className="nextButton">
                            <Button>Next</Button>
                        </Link>
                        <Button>
                            Next
                        </Button>
                    </div>
                </Container>
            </>
        );
    }
}

export default ItemsList