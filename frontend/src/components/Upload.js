import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

function testfun() {
    console.log("test")
}

class Upload extends Component {

    constructor(props) {
        super(props);
    }



    clickHandler() {
        testfun()
    }

    render() {
        return (
            <Button onClick={this.clickHandler}>Upload File</Button>
        );
    }
}

export default Upload