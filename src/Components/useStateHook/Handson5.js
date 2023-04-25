import React ,{ useState } from 'react'

const Handson5 = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [entry,setEntry]=useState([]);
    
    const submitform = (e) =>{
        e.preventDefault();
        setEntry([...entry,{email:email,password:password}]);
        setEmail("");
        setPassword("");
    }
  return (
    <>
        <form action="" onSubmit={submitform}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="text" name="email" id="email" autoComplete='off'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input type="text" name="password" id="password" autoComplete='off'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>
            </div>

            <button type="submit">Login</button>
        </form>
       <div>
       {entry.map((d)=>{
        return <h1>{d.email} || {d.password}</h1>
       })}
       </div>
    </>
    )
}

export default Handson5