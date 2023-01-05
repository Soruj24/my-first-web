import React, { Component, createRef } from "react";

export default class Ref extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = createRef();
        this.state = {};
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.usernameRef.current.value);

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-field">
                    <label>User Name :</label>
                    <input type="text" id="username" ref={this.usernameRef} />
                </div>
                <div className="form-field">
                    <label>Password :</label>
                    <input type="password" id="password" />
                </div>
                <button type="Submit">Save</button>
            </form>
        );
    }
}
