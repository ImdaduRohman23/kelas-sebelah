import axios from 'axios';
import React, { useState } from 'react'
import {Form, Container, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [log, setLog] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePw = (e) =>{
        setPw(e.target.value)
    }

    const handleLogin = (e) => {
        console.log(email, pw)
        e.preventDefault();
        const payload = {
            email: email,
            password: pw,
        };

        axios.post('https://reqres.in/api/Login', payload)
            .then((res) => {
                setLog(res.data.token)
                console.log(log)
                localStorage.setItem('token', res.data.token)
                console.log('from getitem: ', localStorage.getItem('token'))
                navigate('/dashboard')
                
            })
            .catch(err => console.log(err))
    }

    console.log(log)


    return (
        <div>
            <h1>Login</h1>
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
                    <Button onClick={handleLogin}>Login</Button>
                </Form>
            </Container>
            {
                !! log.length && (<h3>Anda berhasil Login</h3>)
            }

        </div>
    )
}

export default Login
