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

    }

    addItem = (e) => {
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
            itemName: "Enter Item",
            itemPrice: "Enter Price",
        }

        this.setState({ items: this.state.items.concat(item) })
    }

    deleteItem = (id) => {
        // get a new array where the item does not have the given id.
        const newArr = this.state.items.filter((item) => item.id !== id)
        this.setState({ items: newArr })

        //TODO maybe look through every person and remove it from them...???
    }

    render() {
        return (
            <div>
                <ItemsList items={this.state.items} onDelete={this.deleteItem.bind(this)} onAdd={this.addItem.bind(this)} />
            </div>
        );
    }
}

export default App;
