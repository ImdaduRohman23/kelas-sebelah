import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


const Dashboard = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users?page=2')
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.log(err))
    }, [])

    // console.log(users)


    const [show, setShow] = useState(false);

    const handleClose = (id) => (
        setShow(false),
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(res => console.log(res))
    );
    const handleShow = () => setShow(true);


    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Cek</h2>

            {
                users.map((user) => (
                    <>
                        <p>{user.first_name}</p>
                        <p>{user.email}</p>
                        <img src={user.avatar} alt="" />
                        <>
                            <Button variant="danger" onClick={handleShow}>
                                Delete
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Apakah Anda yakin ingin menghapus?</Modal.Body>
                                <Modal.Footer>
                                <Button variant="danger" onClick={(() => handleClose(user.id))} >
                                    Delete
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                        <Link to={`/edit/${user.id}`}>
                            <Button >
                                Edit
                            </Button>
                        </Link>
                    </>
                ))
            }
        </div>
    )
}

export default Dashboard
