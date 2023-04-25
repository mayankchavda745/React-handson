import React from 'react'
//useState with Array
const Handson4 = () => {
    const arr = [
        { id: 0, name: "Mayank", age: 22 },
        { id: 1, name: "Yug", age: 17 },
        { id: 2, name: "Manthan", age: 16 },
    ]
    const [list, setList] = React.useState(arr);

    const remove = (index) => {
        setList(list.filter((d)=>d.id!==index))
    }

    const clearname = () => {
        setList([]);
    }
    return (
        <>
            {list.map((d) => {
                return (
                    <>
                        <h1 key={d.id}>{d.name} | {d.age}</h1>
                        <button onClick={()=>remove(d.id)}>remove</button>
                    </>

                )
            })}
            <button onClick={clearname}>clear</button>
        </>
    )
}

export default Handson4