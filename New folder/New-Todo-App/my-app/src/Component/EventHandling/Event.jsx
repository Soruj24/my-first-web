import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text:''
      }
    }
    handleChange=(e)=>{
        this.setState({
            text:e.target.value
        },()=>{
            console.log(e.target.value);
        })
    }
  render() {
    return (
      <div>
       <input type="text" onChange={this.handleChange} />
       <h1>Text : {this.state.text}</h1>
      </div>
    )
  }
}
