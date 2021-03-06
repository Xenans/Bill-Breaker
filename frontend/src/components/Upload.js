import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../style/Upload.css';

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
                    <h4>Uploaded: {this.state.selectedFile.name}</h4>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Open your Uber Eats receipt:</h4>
                </div>
            );
        }
    };

    render() {

        return (

            <Container className="mainDiv">
                <Row className="rowSpacing">
                    {this.fileData()}
                    
                    <div>
                        <span className='btn btn-primary chooseFileButton'>Choose File
                            <input type="file" onChange={this.onFileChange} />
                        </span>
                        <Link to="/additems" className="uploadButton">
                            <Button onClick={this.onFileUpload}>Upload!</Button>
                        </Link>
                    </div>
                </Row>

                <Row className="rowSpacing">
                    <h4>Or enter your order manually:</h4>
                    <Link to="/additems" className="manualButton">
                        <Button onClick={this.onFileUpload}>Enter Manually</Button>
                    </Link>
                </Row>
            </Container>
        );
    }
}

export default Upload