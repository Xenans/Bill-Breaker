import React, { Component } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Items from './Items'

import '../style/ItemList.css';

class ItemsList extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log("this is:", this)

    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                    {this.props.items.map((item) => (
                        <Items item={item} />
                    ))}
                </table>
                <Button onClick={this.handleClick}>
                    Add Item
                </Button>
            </div>
        );
    }
}

export default ItemsList