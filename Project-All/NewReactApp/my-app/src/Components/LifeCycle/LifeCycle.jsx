import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor");
        this.state = {

        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render() {
        return (
            <div>LifeCycle
                {console.log("render")}
            </div>
        )
    }
}
