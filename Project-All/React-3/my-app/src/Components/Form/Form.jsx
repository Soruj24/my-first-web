import React, { Component } from 'react'

export default class Form extends Component {
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
        return (
            <div>
                <input type="text" id='text' name='text' required onChange={this.handleChange} />
                <h1>Text : {this.state.text}</h1>
            </div>
        )
    }
}
