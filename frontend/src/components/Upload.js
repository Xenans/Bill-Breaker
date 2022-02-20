import axios from 'axios';
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import '../style/Upload.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Upload extends Component {

    state = {
        // Initially, no file is selected
        selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8000/api/sean/", formData).then(response => { this.updateMenu(response) });
    };

    updateMenu(response) {
        console.log(response)
        console.log(response.data['data'][0])
        let menuitems = response.data['data'][0]
        console.log(menuitems)
        for (let i = 0; i < menuitems.length; i++) {
            let menuitem = menuitems[i]
            console.log(menuitem)
            this.props.add(menuitem[1], menuitem[2])

        }

    }

    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <br />
                    <h4>Upload: {this.state.selectedFile.name}</h4>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Open your Uber Eats Receipt:</h4>
                </div>
            );
        }
    };

    render() {

        return (

            <Container className="mainDiv">
                <Row>
                    {this.fileData()}
                </Row>
                <Row>
                    <div>
                        <span className='btn btn-primary btn-file'>Choose File
                            <input type="file" onChange={this.onFileChange} />
                        </span>
                        <Link to="/additems" className="uploadButton">
                            <Button onClick={this.onFileUpload}>Upload!</Button>
                        </Link>
                    </div>

                </Row>
                <Row>
                    <h4>Or enter your order manually</h4>
                </Row>
                <Row>
                    <Link to="/additems" className="manualButton">
                        <Button onClick={this.onFileUpload}>Select Manually</Button>
                    </Link>
                </Row>
            </Container>
        );
    }
}

export default Upload