import React, { useReducer } from 'react'

const Handson11 = () => {

    const reducer = (state,action) =>{
        if(action.type === "increment")
            return state+1;
        else if(action.type === "decrement")
            return state-1;
        else
            return state;
    }
    
    const [state, dispatch] = useReducer(reducer, 0);
    
    return (
        <>
            <div>
                <p>{state}</p>
                <div>
                    <button onClick={()=>dispatch({type:"increment"})}>Inc</button>
                    <button onClick={()=>dispatch({type:"decrement"})}>Dec</button>
                </div>
            </div>
        </>
    );
}

export default Handson11