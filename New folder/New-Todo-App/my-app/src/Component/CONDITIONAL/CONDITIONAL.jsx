import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class CONDITIONAL extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLoggedIn: true
        }
    }

    render() {
        return (
            <div>
              {this.state.IsLoggedIn ? <Home /> : <Login />}
            </div>
        )
    }
}
