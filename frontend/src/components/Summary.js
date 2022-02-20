import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

class Summary extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Add a Person:</h1>
                <Link to="/bill" className="nextButton">
                    <Button>Next</Button>
                </Link>
            </>
        );
    }
}


export default Summary