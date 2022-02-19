import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react'

import ItemsList from './ItemsList'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items:
                [{
                    id: 1,
                    itemName: "Item1",
                    itemPrice: "30",
                },
                {
                    id: 2,
                    itemName: "Item2",
                    itemPrice: "40",
                },
                {
                    id: 3,
                    itemName: "Item3",
                    itemPrice: "60",
                },
                ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePrice = this.changePrice.bind(this);
    }

    addItem(e) {
        e.preventDefault()
        var nextId
        if (this.state.items.length === 0) {
            nextId = 1
        }
        else {
            nextId = this.state.items[this.state.items.length - 1].id + 1
        }
        const item = {
            id: nextId,
            itemName: "",
            itemPrice: "",
        }

        this.setState({ items: this.state.items.concat(item) })
    }

    deleteItem(id) {
        // get a new array where the item does not have the given id.
        const newArr = this.state.items.filter((item) => item.id !== id)
        this.setState({ items: newArr })

        //TODO maybe look through every person and remove it from them...???
    }

    changeName(newItemName, id) {
        const idx = this.state.items.findIndex(x => x.id === id)

        this.state.items[idx].itemName = newItemName
        //improper
        this.setState(this.state.items)
    }

    changePrice(e, id) {
        const idx = this.state.items.findIndex(x => x.id === id)

        this.state.items[idx].itemPrice = e
        //improper
        this.setState(this.state.items)
    }

    render() {
        return (
            <div>
                <ItemsList
                    items={this.state.items}
                    onDelete={this.deleteItem}
                    onAdd={this.addItem}
                    changeName={this.changeName}
                    changePrice={this.changePrice}
                />
            </div>
        );
    }
}

export default App;
