import { Component } from 'react'

import ItemsList from './ItemsList'

import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    itemName: "Item 1",
                    itemPrice: 30
                },
                {
                    id: 2,
                    itemName: "Item 2",
                    itemPrice: 40
                }       
            ],
            users: []
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.changeItemName = this.changeItemName.bind(this);
        this.changeItemPrice = this.changeItemPrice.bind(this);
    }

    addItem(event) {
        event.preventDefault();

        let nextId;
        if (this.state.items.length === 0) {
            nextId = 1;
        }
        else {
            nextId = this.state.items[this.state.items.length - 1].id + 1;
        }

        const item = {
            id: nextId,
            itemName: "",
            itemPrice: "",
        };

        this.setState({ items: this.state.items.concat(item) });
    }

    deleteItem(itemId) {
        // get a new array where the item does not have the given id.
        const newArr = this.state.items.filter((item) => item.itemId !== itemId);
        this.setState({ items: newArr });

        //TODO maybe look through every person and remove it from them...???
    }

    changeItemName(newItemName, itemId) {
        const idx = this.state.items.findIndex(x => x.itemId === itemId);

        this.state.items[idx].itemName = newItemName;
        //improper
        this.setState(this.state.items);
    }

    changeItemPrice(newItemPrice, itemId) {
        const idx = this.state.items.findIndex(x => x.itemId === itemId);

        this.state.items[idx].itemPrice = newItemPrice;
        //improper
        this.setState(this.state.items);
    }

    render() {
        return (
            <>
                <ItemsList 
                    items={this.state.items}
                    onAddItem={this.addItem}
                    onDeleteItem={this.deleteItem}
                    onChangeItemName={this.changeItemName}
                    onChangeItemPrice={this.changeItemPrice}
                />
            </>
        );
    }
}

export default App;
