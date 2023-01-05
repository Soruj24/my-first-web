import React, { Component } from 'react'
import Home from './Home'
import LoggedInPage from './LoggedInPage'

export default class Conditional extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLogged: true,
        }
    }
    render() {
        return (
            <div>


                {
                    this.state.IsLogged ? <Home /> : <LoggedInPage />
                }

            </div>
        )
    }
}
