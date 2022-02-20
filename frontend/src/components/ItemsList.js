import React, { Component } from 'react';

import Items from './Items'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Form from 'react-bootstrap/Form'
import '../style/ItemList.css';
import {Link} from 'react-router-dom'

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
                            <Items
                                item={item}
                                onDelete={this.props.onDelete}
                                changeName={this.props.changeName}
                                changePrice={this.props.changePrice}
                            />
                        ))}
                    </Form>

                    <div className="d-flex justify-content-between">
                        <Button onClick={this.props.onAdd}>
                            Add Item
                        </Button>
                        <Link to="/addpeople" className="nextButton">Next</Link>

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