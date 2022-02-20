import { Component } from 'react'
import React from 'react';
import Navbar from "./Navbar/Navbar";
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddPeople from './AddPeople'
import Upload from './Upload';
import FoodSelection from './FoodSelection'
import ItemsList from './ItemsList'
import Summary from './Summary'
import Bill from './Bill'
import Signup from './Signup'
import Login from './Login'

import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    /**
     * State variables:
     * Array{Object} items - an array of food items
     *  - Each Item has the following fields:
     *      - {Integer} id - id of the item
     *      - {String} name - name of the item
     *      - {String} price - price of the item
     *      - {Array{Integer}} users - an array of users (ids) who ate the item
     * Array{Object} users - an array of users
     *  - Each User has the following fields:
     *      - {Integer} id - id of the user
     *      - {String} name - name of the user
     *      - {Array{Integer}} items - an array of items (ids) the user ate
     */
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            users: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setItemName = this.setItemName.bind(this);
        this.setItemPrice = this.setItemPrice.bind(this);
        this.addUserToItem = this.addUserToItem.bind(this);
        this.removeUserFromItem = this.removeUserFromItem.bind(this);

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.addItemToUser = this.addItemToUser.bind(this);
        this.removeItemFromUser = this.removeItemFromUser.bind(this);

        this.itemClicked = this.itemClicked.bind(this);
    }

    // Adds item to Item state variable
    addItem(name = "", price = "") {
        let nextId;

        if (this.state.items.length === 0) {
            nextId = 1;
        }
        else {
            nextId = this.state.items[this.state.items.length - 1].id + 1;
        }

        const item = {
            id: nextId,
            name: name,
            price: price,
            users: []
        }

        this.setState({
            items: this.state.items.concat(item)
        });
    }

    // Deletes an item from Item state variable
    deleteItem(id) {
        // Check if item is in Item state variable
        const item = this.state.items.find(item => item.id === id);

        if (item !== undefined) {
            // Remove item from Items state variable
            const newArr = this.state.items.filter((item) => item.id !== id);

            this.setState({
                items: newArr
            });

            // Remove all occurrences of the item in the Users state variable's users
            this.state.users.map(user => this.removeItemFromUser(user.id, id));
        }
    }

    // Sets the name for an item
    setItemName(id, name) {
        this.setState(prevState => ({
            items: prevState.items.map(item => (item.id === id ? { ...item, name: name } : item))
        }))
    }

    // Sets the price for an item
    setItemPrice(id, price) {
        this.setState(prevState => ({
            items: prevState.items.map(item => (item.id === id ? { ...item, price: price } : item))
        }))
    }

    // Adds a user to an item's users to indicate that the user ate the item
    addUserToItem(itemId, userId) {
        // Check if user has not already been added
        const item = this.state.items.find(item => item.id === itemId);
        const user = this.state.users.find(user => user.id === userId);

        if (item !== undefined && user !== undefined && !(item.users.includes(userId))) {
            // Add the user to the item's users
            this.setState(prevState => ({
                items: prevState.items.map(item => (item.id === itemId ? { ...item, users: [...item.users, userId] } : item))
            }))

            // Add the item to the user's items to obey m2m relationship
            this.addItemToUser(userId, itemId);
        }
    }

    // Removes a user from an item's users
    removeUserFromItem(itemId, userId) {
        // Check if item has not already been removed
        const item = this.state.items.find(item => item.id === itemId);

        if (item !== undefined && item.users.includes(userId)) {
            // Remove the user from the item's user
            this.setState(prevState => ({
                items: prevState.items.map(item => (item.id === itemId ? { ...item, users: item.users.filter(user => user !== userId) } : item))
            }))

            // Remove the item from the user's items to obey m2m relationship
            this.removeItemFromUser(userId, itemId);
        }
    }

    // Adds a user to the User state variable
    addUser() {
        let nextId;
        if (this.state.users.length === 0) {
            nextId = 1;
        }
        else {
            nextId = this.state.users[this.state.users.length - 1].id + 1;
        }

        const user = {
            id: nextId,
            name: "",
            items: []
        }

        this.setState({
            users: this.state.users.concat(user)
        });
    }

    // Removes a user from the Users state variable
    deleteUser(id) {
        const user = this.state.users.find(user => user.id === id);

        if (user !== undefined) {
            // Remove user for Users state variable
            const newArr = this.state.users.filter((user) => user.id !== id);
            this.setState({
                users: newArr
            });

            // Remove all occurrences of the user in the Item state variable's items
            this.state.items.map(item => this.removeUserFromItem(item.id, id));
        }
    }

    // Sets the name for a user
    setUserName(id, name) {
        this.setState(prevState => ({
            users: prevState.users.map(user => (user.id === id ? { ...user, name: name } : user))
        }))
    }

    // Adds an item (id) to a user's items to indicate the user ate the item
    addItemToUser(userId, itemId) {
        // Check if item has already been added
        const item = this.state.items.find(item => item.id === itemId);
        const user = this.state.users.find(user => user.id === userId);

        if (item !== undefined && user !== undefined && !(user.items.includes(itemId))) {
            // Add the item to the user's items
            this.setState(prevState => ({
                users: prevState.users.map(user => (user.id === userId ? { ...user, items: [...user.items, itemId] } : user))
            }))

            // Add the user to the item's users to obey m2m relationship
            this.addUserToItem(itemId, userId);
        }
    }

    // Removes an item (id) from a user's items
    removeItemFromUser(userId, itemId) {
        // Check if item has not already been removed
        const user = this.state.users.find(user => user.id === userId);

        if (user !== undefined && user.items.includes(itemId)) {
            // Remove the item from the user's items
            this.setState(prevState => ({
                users: prevState.users.map(user => (user.id === userId ? { ...user, items: user.items.filter(item => item !== itemId) } : user))
            }))

            // Remove the user from the item's users to obey m2m relationship
            this.removeUserFromItem(itemId, userId);
        }
    }

    // Logs item and user id to console
    itemClicked(itemId, userId) {
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
                            {/* Welcome route */}
                            <Route exact path="/">
                                <Container className="mt-4 mb-4">
                                    <Signup />
                                </Container>
                            </Route>

                            <Route path="/upload">
                                <Upload
                                    items={this.state.items}
                                    add={this.addItem}
                                />
                            </Route>

                            <Route path="/additems">
                                <ItemsList
                                    items={this.state.items}
                                    onDelete={this.deleteItem}
                                    onAdd={this.addItem}
                                    onChangeItemName={this.setItemName}
                                    onChangeItemPrice={this.setItemPrice}
                                />
                                <h1>dsadsa</h1>
                            </Route>


                            <Route path="/addpeople">
                                <AddPeople />
                            </Route>

                            <Route path="/selectfood">
                                <FoodSelection
                                    items={this.state.items}
                                    onClick={this.itemClicked}
                                />
                            </Route>
                            <Route path="/summary">
                                <Summary />
                            </Route>
                            

                            <Container className="mt-4 mb-4">
                                <Route path="/login" component={Login}>
                                </Route>
                            </Container>


                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;