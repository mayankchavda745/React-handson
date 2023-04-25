import React, { useEffect, useState } from 'react'

const Handson6 = () => {
    const [count, setCount] = useState(0);
    useEffect(
        ()=>{
            if(count===0)
                 document.title=`chats`
            else
                 document.title = `chats(${count})`
        }
    ,[count]);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
}

export default Handson6