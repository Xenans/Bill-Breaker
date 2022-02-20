import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

import '../style/FoodSelection.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.items.map((item) =>
                    (<h1 onClick={() => this.props.onClick(item.itemName, this)}>{item.itemName}: ${item.itemPrice}</h1>))}
                {/* <Button className="nextButton">Next</Button> */}
                <Link to="/additems" className="nextButton">Next</Link>
            </>
        );
    }
}

export default Header