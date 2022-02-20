import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import '../style/FoodSelection.css';

class FoodSelection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <Col>
                        {this.props.items.map((item) => (
                            <Item 
                                key={item.id}
                                item={item} 
                                user={this.props.user} 
                                onSelect={this.props.onSelectItem} 
                                onDeselect={this.props.onDeselectItem} 
                            />
                        ))}
                    </Col>
                </Container>

                <Link to="/addPerson" className="nextButton">
                    <Button>Next</Button>
                </Link>
            </>
        );
    }
}

class Item extends Component {
    constructor(props) {
        super(props);

        this.state =({
            selected: false
        })

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(itemId) {
        if (this.state.selected) {
            this.props.onDeselect(this.props.user.id, itemId);
        } else {
            this.props.onSelect(this.props.user.id, itemId);
        }

        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        return (
            <Card onClick={this.handleClick}>
                <Card.Body className={this.state.selected ? "selected" : "unselected"}>
                    {this.props.item.name}: ${this.props.item.price}
                </Card.Body>
            </Card>
        );
    }
}

export default FoodSelection