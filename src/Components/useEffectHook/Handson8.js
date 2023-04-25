import React, { useState, useEffect } from 'react'

const Handson8 = () => {
    const [data, setData] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            setData(await response.json());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {data.map((d, index) =>
                <h1 key={index}>{d.login}</h1>
            )}
        </>
    )
}

export default Handson8