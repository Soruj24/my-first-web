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
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button
          onClick={this.handleClick}
          disabled={count === 5 ? true : false}
        >
          +
        </button>
        <button
          onClick={this.handleClickDr}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
