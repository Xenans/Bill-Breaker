import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

class Bill extends Component {


    constructor(props) {
        super(props);
    }

    calculatePrice(id) {
        let total = 0
        const user = this.props.users.find(user => user.id === id)
        for (const itemId of user.items) {
            const item = this.props.items.find(item => item.id === itemId)
            total += Number(item.price) / item.users.length
        }

        return Math.round(total * 100) / 100
    }

    render() {
        return (
            <>
                <h1>Here are the results</h1>
                <div>
                    {this.props.users.map((user) => (
                        <h2>{user.name} {this.calculatePrice(user.id)}</h2>
                    ))}
                </div>
            </>
        );
    }
}


export default Bill