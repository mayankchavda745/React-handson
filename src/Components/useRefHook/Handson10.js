import React , { useState, useRef} from 'react'

const Handson10 = () => {
    const [name,setName] = useState('');
    const inputRef = useRef();
 //   const count = useRef(0);

    // useEffect(()=>{
    //     setCount(count+1);
    // },[name])

        // useEffect(()=>{
        //     count.current +=1
        // })
    return (
    <>
        <input ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <h1>My name is {name}</h1>
        {/* <h1>I renderd {count.current} times.</h1> */}
        
    </>
    )
}

export default Handson10