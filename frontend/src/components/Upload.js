import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class Upload extends Component {

    constructor(props) {
        super(props);
    }

    clickHandler() {
        console.log(this)
    }

    render() {
        return (
            <Button onClick={this.clickHandler}>Upload File</Button>
        );
    }
}

export default Upload