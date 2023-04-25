import React from 'react'
import { useState } from 'react'
//useState 101
const Handson1 = () => {
    const [name,setName] = useState("Mayank"); 
    const changename = ()=>{
        if(name==="Mayank")
            setName("Yug");
        else if(name==="Yug")
            setName("Mayank");
    }
    return (
    <>
        <h1>{name}</h1>
        <button onClick={changename}>click for change</button>
    </>
  )
}

export default Handson1