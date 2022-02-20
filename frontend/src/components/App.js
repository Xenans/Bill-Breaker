import React from 'react';
import Navbar from "./Navbar/Navbar";
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AddPeople from './AddPeople'
import FoodSelection from './FoodSelection'
import ItemsList from './ItemsList'


class App extends Component {

    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this)
        this.changePrice = this.changePrice.bind(this)

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
            itemName: "",
            itemPrice: "",
        }

        this.setState({ items: this.state.items.concat(item) })
    }

    deleteItem = (id) => {
        // get a new array where the item does not have the given id.
        const newArr = this.state.items.filter((item) => item.id !== id)
        this.setState({ items: newArr })

        //TODO maybe look through every person and remove it from them...???
    }

    changeName = (e, id) => {
        const idx = this.state.items.findIndex(x => x.id === id)

        this.state.items[idx].itemName = e
        //improper
        this.setState(this.state.items)
    }

    changePrice = (e, id) => {
        const idx = this.state.items.findIndex(x => x.id === id)

        this.state.items[idx].itemPrice = e
        //improper
        this.setState(this.state.items)
    }

    itemClicked = (itemId, userId) => {
        console.log(itemId)
        console.log(userId)
        // add user to the food's user array using item and user id

        // add item to user's food array using user id and item id
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <ItemsList
                                items={this.state.items}
                                onDelete={this.deleteItem.bind(this)}
                                onAdd={this.addItem.bind(this)}
                                changeName={this.changeName.bind(this)}
                                changePrice={this.changePrice.bind(this)}
                                />
                                <AddPeople />
                                <FoodSelection
                                    items={this.state.items}
                                    onClick={this.itemClicked.bind(this)} />
                            </Route>
                            <Route path="/ddd" element={<h1>dsadsa</h1>}>
                                <h1>dsadsa</h1>
                            </Route>


                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
