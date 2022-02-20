import React, { Component } from 'react'

import '../style/AddPeople.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

class AddPeople extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Add a Person:</h1>

                <Form className="input">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className="nameInput" type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                            Enter name of next person to add them to the bill
                        </Form.Text>
                    </Form.Group>
                </Form>
                <Link to="/selectfood" className="addButton">
                    <Button>Select Food</Button>
                </Link>
                <Link to="/summary" className="everyoneButton">
                    <Button>That's Everyone</Button>
                </Link>
                {/* <Button className="everyoneButton">That's Everyone</Button>
                <Button className="addButton">Submit</Button> */}
            </>
        );
    }
}


export default AddPeople