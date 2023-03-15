import React, { Component } from "react";

export default class INDEX extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>This is Text !</h1>
        <input type="text" onChange={this.handleChange} />
        <h1>Text : {this.state.text}</h1>
      </div>
    );
  }
}
