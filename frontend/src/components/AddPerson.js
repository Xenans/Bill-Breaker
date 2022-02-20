import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import '../style/AddPeople.css';


class AddPerson extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            name: ""
        });

        this.handleChange = this.handleChange.bind(this);
    }

    // Updates Name state variable when form input field changes
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <>
                <h1>Add a Person:</h1>

                <Form className="input">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            className="nameInput" 
                            type="text" 
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <Form.Text className="text-muted">
                            Enter name of next person to add them to the bill
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Link to="/summary" className="everyoneButton">
                    <Button>That's Everyone</Button>
                </Link>

                <Link 
                    to="/selectfood" 
                    className="submitButton" 
                    onMouseDown={() => this.props.onSubmit(this.state.name)}
                >
                    <Button className="addButton">Submit</Button>
                </Link>
            </>
        );
    }
}


export default AddPerson