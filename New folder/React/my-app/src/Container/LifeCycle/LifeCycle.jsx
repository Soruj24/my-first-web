import React, { Component } from "react";

// Mounting -> constructor -> render -> componentDidMount
// Updating -> state/props -> render

class LifeCycle extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      count: 0,
    };
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true
    }
  componentDidMount() {
    console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      console.log("render");
    }
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default LifeCycle;
