import React ,{ useState } from 'react'
import AddAgenda from './AddAgenda'
import ViewAgenda from './ViewAgenda'


const Agenda = () => {
    const [flag, SetFlag] = useState('View');
    const [title, SetTitle] = useState('');
    const [des, SetDes] = useState('');
    const [goal, SetGoal] = useState([1,2,3]);
    const [obj, SetObj] = useState([{title:"Meeting",des:"discussion of ToDo",goal:["1","2","3"]},
    {title:"Meeting2",des:"discussion of ToDo2",goal:["11","12","13"]}]);

    return(
        <>
            <button onClick={()=>{flag==='Add'?SetFlag('View'):SetFlag('Add')}}>{flag}</button>
            {flag==='Add'?
            <ViewAgenda obj={obj}/>
            :<>
                {/* ----add--- */}
                
            </>}
        </>
    );
 
}

export default Agenda