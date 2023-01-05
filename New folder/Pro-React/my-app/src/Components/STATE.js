import React, { Component } from "react";

export default class STATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleClickDr = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClickDr}>-</button>
      </div>
    );
  }
}
