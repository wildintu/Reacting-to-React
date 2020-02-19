import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "some string",
      value: "",
      hasLoaded: false
    };
  }

  handleInputChange(pressed) {
    this.setState({ value: pressed });
  }

  handleClick() {
    if (this.state.hasLoaded === true) {
        this.setState({hasLoaded: false});
    } else {
        this.setState({hasLoaded: true})
    }
    console.log(this.state.hasLoaded);
  }

  componentDidMount() {
    this.setState({hasLoaded: true})
  }

  render() {
      if (this.state.hasLoaded === true) {
          return (
            <React.Fragment>
              <h1 className="Header">{`${this.props.name} ${this.state.text}`}</h1>
              <input
                placeholder={"Type something"}
                value={this.state.value}
                onChange={event => this.handleInputChange(event.target.value)}
              />
              <button onClick={() => this.handleClick(this.state.hasLoaded)}>BUTTON</button>
          </React.Fragment>
          );
      } else {
          return (
              <React.Fragment>
              <h1>Loading...</h1>
              <button onClick={() => this.handleClick(this.state.hasLoaded)}>BUTTON</button>
              </React.Fragment>
              )
            }
  }
}

export default App;
