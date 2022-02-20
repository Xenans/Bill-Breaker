import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

class Summary extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
          <SummaryListItem item={{name:"hello", price:"123"}}/> 
      );
  }
}


class SummaryList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1></h1>
        )
    }
}

class SummaryListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form.Group className="w-25 p-3">
                <Row>
                    <Col>
                        <Form.Control
                            type="text" readOnly 
                            value={this.props.item.name}
                        />
                        <Form.Control
                            type="number" readOnly 
                            value={this.props.item.price}
                        />
                    </Col>
                    {/* <CloseButton onClick={() => this.props.onDelete(this.props.item.id)} /> */}
                </Row>
            </Form.Group>
        )
    }
}



export default Summary