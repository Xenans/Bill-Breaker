import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Items from './Items'

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
                        <form>
                            {this.props.items.map((item) => (
                                <Items
                                    item={item}
                                    onDelete={this.props.onDelete}
                                    changeName={this.props.changeName}
                                    changePrice={this.props.changePrice}
                                />
                            ))}
                        </form>
                        <Button onClick={this.props.onAdd}>
                            Add Item
                        </Button>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default ItemsList