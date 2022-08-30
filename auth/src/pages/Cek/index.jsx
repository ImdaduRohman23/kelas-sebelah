import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cek = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        axios
            .get('https://bootcamp-rent-car.herokuapp.com/admin/car')
            .then((r) => setData(r.data))
            .catch((err) => console.log(err))
    }, [])

    console.log(data)

    const buah = ['dfsafg', 'gfdg', 'dsfgdfg']

    console.log(buah)

    return (
        <div>
            <h2>Cek</h2>

            {
                data.map((item) => (
                    <>
                        <p>{item}</p>
                    </>
                ))
            }
        </div>
    )
}

export default Cek
