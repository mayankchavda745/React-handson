import React , {useState} from 'react'

const Handson6 = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </>
    )
}

export default Handson6