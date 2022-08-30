import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [person, setPerson] = useState({});
    const param = useParams();
    const id = param.id;
    console.log(param)
    const getPerson = () => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(res => setPerson(res.data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPerson()
    }, [])

    console.log(person)

    return (
        <div>
            <h2>EDIT</h2>
        </div>
    )
}

export default Edit
