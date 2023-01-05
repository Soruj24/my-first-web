import React, { Component } from "react";
import { newsCategory } from "./News";
import Header from "./components/Header";
import NewsList from "./components/News.List";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <NewsList news={fakeNews} />
          </div>
        </div>
      </div>
    );
  }
}
