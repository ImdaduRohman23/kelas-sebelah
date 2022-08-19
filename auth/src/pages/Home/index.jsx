import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to={'/register'}>
                <button>Registrasi</button>
            </Link>
            <button>Login</button>            
        </div>
    )
}

export default Home
