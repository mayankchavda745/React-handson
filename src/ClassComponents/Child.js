import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <button onClick={()=>this.props.greetfun('123')}>Child</button>
    )
  }
}
