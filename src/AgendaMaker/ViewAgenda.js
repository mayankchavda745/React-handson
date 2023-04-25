import React from 'react'

const ViewAgenda = ({ obj }) => {
    return (
        <>
            {
                obj.map((data, i) => {
                    return <div key={i}>
                        <h1>{data.title}</h1>
                        {data.goal.map((d, index) => {
                            return <h3 key={index}>{d}</h3>
                        })}
                        <h2>Description: {data.des}</h2>
                    </div>
                })
            }
        </>
    )
}

export default ViewAgenda