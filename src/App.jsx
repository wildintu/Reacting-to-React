import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'some string',
            value: ""
        }
        
    }

    handleInputChange(pressed) {
        this.setState({value: pressed});
    }

    render() {
            return (
            <div>
            <h1 className="Header">{`${this.props.name} ${this.state.text}`}</h1>
            <input
            placeholder = {"Type something"}
            value = {this.state.value}
            onChange = { (event) => this.handleInputChange(event.target.value) }
            />
            </div>
            )
    }
}

export default App;