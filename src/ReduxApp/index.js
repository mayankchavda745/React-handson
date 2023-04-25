import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { incNumber, decNumber} from './actions/index';

const Index = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div>
            <button title="Decrement" onClick={()=>dispatch(incNumber())}><span>+</span></button>
            <input type="text"  value={myState}/>
            <button title="Increment" onClick={()=>dispatch(decNumber())}><span>-</span></button>
        </div>

    </div>
  )
}

export default Index;