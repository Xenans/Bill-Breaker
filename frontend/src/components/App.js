import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react'

import ItemsList from './ItemsList'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:
                [{
                    id: 1,
                    itemName: "Item1",
                    itemPrice: "30",
                },
                {
                    id: 2,
                    itemName: "Item2",
                    itemPrice: "40",
                },
                {
                    id: 3,
                    itemName: "Item3",
                    itemPrice: "60",
                },
                ]
        };
    }

    render() {
        return (
            <div>
                <ItemsList items={this.state.items} />
            </div>
        );
    }
}

export default App;
