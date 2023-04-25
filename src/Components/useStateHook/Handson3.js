import React from 'react'

const Handson3 = () => {
  const [obj,setObj] = React.useState({name:"mayank",age:"22",hobby:"chess"});
  
  const update=()=>{
    setObj({...obj,hobby:"badminton"});
  }
  return (
    <>
      <h1>Name: {obj.name} | age: {obj.age} | hobby: {obj.hobby}</h1>
      <button onClick={update}>Update</button>
    </>
  )
}

export default Handson3