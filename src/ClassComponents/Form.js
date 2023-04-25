import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
    super(props);
    this.state={
        name:'',
        email:'',
        data:[],
        topic:'React'
    }
    
    }
    showform =  () => {
         this.setState({data:[...this.state.data,{name:this.state.name,email:this.state.email,topic:this.state.topic}],name:'',email:'',topic:''})
       
    }
  render() {
    return (
      <div>
        <h1>Name:</h1>
        <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <h2>Email:</h2>
        <input type='text' value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
        <select value={this.state.topic} onChange={(e)=>this.setState({topic:e.target.value})}>
            <option value='react'>React</option>
            <option value='java'>Java</option>
        </select>
        <button onClick={this.showform}>Submit</button>
        {this.state.data.map((d,i)=><h1 key={i}>{d.name} || {d.email} || {d.topic}</h1>)}

      </div>
    )
  }
}
