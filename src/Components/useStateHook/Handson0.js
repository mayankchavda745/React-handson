import React from 'react'
import { useState, useEffect } from 'react';

function Seconds() {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        const x = setInterval(() => { setTimer(timer + 1) }, 1000);

        return (() => clearInterval(x));
        // setTimeout(()=>{setTimer(timer+1)},1000);
    }, [timer]);

    return (
        <>
            <h1>Seconds:{timer}</h1>
        </>
    )
}

export default Seconds