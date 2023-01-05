import React, { Component } from 'react'

export default class EVENT extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <h1>EVENT</h1>
                <input type="text" name='text' onChange={this.handleChange.bind(this)} />
                <h1>Event Change : {text}</h1>
            </div>
        )
    }
}
