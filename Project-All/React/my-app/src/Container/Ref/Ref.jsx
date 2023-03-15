import React, { Component, createRef } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);
      this.userNameRef = createRef();
    this.state = {};
  }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.userNameRef.current.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name : </label>
          <input type="text" name="userName" id="userName" ref={this.userNameRef} />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Ref;
