import React , { useRef, useState } from 'react'

const Handson9 = () => {
    const luckyname = useRef(null);
    const [show, setShow] = useState(false);
// we are not able tp submit the new name 
    const submitform = (e) => {
        e.preventDefault();
        setShow(true);
        const name = luckyname.current.value;
        name === "" ? alert("pls fill the data") : setShow(true);
    }
    return (
        <>
            <form action='' onSubmit={submitform}>
                <div>
                    <label htmlFor='luckyname'>Enter your name</label>
                    <input type="text" id="luckyname" ref={luckyname}/>
                </div>
                <button>Submit</button>
            </form>
            <p>{show ? `Your lucky name is ${luckyname.current.value}`:"Loading..."}</p>
        </>
    )
}

export default Handson9