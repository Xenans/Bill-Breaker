import React, { Component } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
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
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                    {this.props.items.map((item) => (
                        <Items item={item} onDelete={this.props.onDelete} />
                    ))}
                </table>
                <Button onClick={this.props.onAdd}>
                    Add Item
                </Button>
            </div>
        );
    }
}

export default ItemsList