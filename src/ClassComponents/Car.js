import React, { Component } from 'react'
import Child from './Child';

class Car extends Component {

    constructor(){
        super();
        this.state={
            message:'Welcome state',
            val:1,
            show:true,
            arr:[{name:'mayank',age:22},{name:'yug',age:17}]
        }
    }

    increment= async()=>{
        //await this.setState({val:this.state.val+1});
        this.setState((prev)=>({
            val:prev.val+1
        }));
        console.log(this.state.val);
    }

    incrementByFive = () =>{
         this.increment();
         this.increment();
         this.increment();
         this.increment();
    }

    greetfun = (child) => {
        alert(`calling from parent ${child}`);
    }

    render() {
        const {model} = this.props;
        const {message,val} = this.state;
        return (
            <div>
                <h1>{message} || {val} || {model}</h1>
                <button onClick={()=>this.setState({message:"Thx"})}>Subscribe</button>  
                <button onClick={()=>this.incrementByFive()}>Change val</button>  
                <Child greetfun={()=>this.greetfun()}/>
                {this.state.show?<h1>showing</h1>:<h1>false</h1>}
                {this.state.arr.map((d,i)=><h2 key={i}>{d.name} || {d.age}</h2>)}
            </div>
        )
    }
}

export default Car;