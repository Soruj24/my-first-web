import React, { Component } from 'react'

export default class EVENT extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text:''
      }
    }
    handleChang = (e) =>{
    this.setState({
      text:e.target.value
    })
    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChang}/>
        <h1>Text : {this.state.text}</h1>
      </div>
    )
  }
}
