import React, { Component } from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class Items extends Component {

    constructor(props) {
        super(props);


    }





    render() {
        return (
            <>
                <Row>
                    <Col>
                        <input
                            type="text"
                            value={this.props.item.itemName}
                            onChange={(e) => this.props.changeName(e.target.value, this.props.item.id)}
                        />
                        <input
                            type="text"
                            value={this.props.item.itemPrice}
                            onChange={(e) => this.props.changePrice(e.target.value, this.props.item.id)}
                        />
                    </Col>
                    <Col>
                        <CloseButton onClick={() => this.props.onDelete(this.props.item.id)} />
                    </Col>
                </Row>
            </>
        );
    }
}

// Items.defaultProps = {
//     itemName: 'Enter Name',
//     itemPrice: 'EnterPrice'
// }

export default Items