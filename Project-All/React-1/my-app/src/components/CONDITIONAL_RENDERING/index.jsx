import React, { Component } from "react";
import HomePage from "./HomePage";
import LogInPage from "./LoginPage";
export default class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsLoggedIn: false,
    };
  }
  render() {
    const { IsLoggedIn } = this.state;
     
    return <div>{IsLoggedIn? <HomePage /> : <LogInPage />}</div>;
  }
}
