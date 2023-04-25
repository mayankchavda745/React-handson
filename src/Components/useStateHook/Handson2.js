import React from 'react'
//useState with Array
const Handson2 = () => {
  const arr = [
    {id:0,name:"Mayank",age:22},
    {id:1,name:"Yug",age:17},
    {id:2,name:"Manthan",age:16},
  ]
  const [list,setList] = React.useState(arr);
  const clearname = ()=>{
    setList([]);
  }
  return (
    <>
        {list.map((d,index)=><h1 key={index}>{d.name} | {d.age}</h1>)}
        <button onClick={clearname}>clear</button>
    </>
  )
}

export default Handson2