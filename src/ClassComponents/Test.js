import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    componentDidMount = () => {
        console.log("in mounting");
        setTimeout(()=>{
            this.setState({count:this.state.count+1})
        },1000)
    }
  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}
