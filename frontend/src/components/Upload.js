import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

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
            this.props.add(i, menuitem[1], menuitem[2])

        }

    }

    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <p>File Type: {this.state.selectedFile.type}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <div>
                    <input type="file" onChange={this.onFileChange} />

                    <Link to="/additems" className="uploadButton">
                        <Button onClick={this.onFileUpload}>Upload!</Button>
                    </Link>
                </div>
                {this.fileData()}
                <Link to="/additems" className="nextButton">
                    <Button onClick={this.onFileUpload}>Next</Button>
                </Link>
            </div>
        );
    }
}

export default Upload