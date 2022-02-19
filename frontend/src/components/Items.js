import React, { Component } from 'react'
import CloseButton from 'react-bootstrap/CloseButton';



class Items extends Component {

    constructor(props) {
        super(props);

    }

    changeName = () => {
        console.log("this is:", this)
    }

    changePrice = () => {
        console.log("this is:", this)
    }


    render() {
        return (
            <>
                <tr>
                    <td contenteditable='true' onchange={this.changeName}>{this.props.item.itemName}</td>
                    <td contenteditable='true' onchange={this.changePrice}>{this.props.item.itemPrice}</td>
                    <td><CloseButton onClick={() => this.props.onDelete(this.props.item.id)} /></td>
                </tr>
            </>
        );
    }
}

// Items.defaultProps = {
//     itemName: 'Enter Name',
//     itemPrice: 'EnterPrice'
// }

export default Items