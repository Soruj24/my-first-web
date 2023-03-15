import React, { Component } from "react";
import { newsCategory } from "../News";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }
  handleChange = (e) => {
    this.setState({
        searchTerm:e.target.value
    })
  };
  handleChangeKeyPass = (e) => {
    //todo
  };
  render() {
    const { category } = this.props;
    return (
      <div className="my-4">
        <h1 className="md-4" style={{ fontWeight: "300" }}>
          Block Buster Headline
        </h1>
        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter To Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleChangeKeyPass}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              if (category === newsCategory[item]) {
                return (
                  <button className="btn btn-sm btn-warning mr-2 mb-2">{`#${newsCategory[item]}`}</button>
                );
              }
              return (
                <button className="btn btn-sm btn-light mr-2 mb-2">{`#${newsCategory[item]}`}</button>
              );
            })}
        </div>
      </div>
    );
  }
}
