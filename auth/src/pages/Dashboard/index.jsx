import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [users, setUsers] = useState('')

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users?page=2')
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.log(err))
    }, [])

    console.log(users)

    return (
        <div>
            <h1>Dashboard</h1>
            {
                users.map((user) => (
                    <>
                        <p>{user.first_name}</p>
                        <p>{user.email}</p>
                        <img src={user.avatar} alt="" />
                    </>
                ))
            }
        </div>
    )
}

export default Dashboard
