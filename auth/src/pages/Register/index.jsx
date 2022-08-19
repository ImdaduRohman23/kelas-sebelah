import axios from 'axios';
import React, { useState } from 'react'
import {Form, Container, Button} from 'react-bootstrap';
const Register = () => {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [res, setRes] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePw = (e) =>{
        setPw(e.target.value)
    }

    const handleRegister = (e) => {
        // console.log(email, pw)
        e.preventDefault();
        const payload = {
            email: email,
            password: pw,
        };

        axios.post('https://reqres.in/api/register', payload)
            .then((res) => setRes(res.data.token))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Register</h1>
            <Container>
                <Form style={{width: '500px'}}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => handleEmail(e)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => handlePw(e)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleRegister}>Register</Button>
                </Form>
            </Container>
            {
                !! res.length && (<h3>Anda berhasil masuk</h3>)
            }
        </div>
    )
}

export default Register
