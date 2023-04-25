import React , { useState, useEffect }from 'react'

const Handson7 = () => {
    const [wid , setWid] = useState(window.screen.width);
    const actualwid = ()=>setWid(window.innerWidth);
    useEffect(()=>{
       window.addEventListener("resize",actualwid)
       return ()=>{
        window.removeEventListener("resize",actualwid)
       }
    });
  return (
    <div>{wid}</div>
  )
}

export default Handson7