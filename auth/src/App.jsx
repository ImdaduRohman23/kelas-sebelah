import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './pages/HOC/ProtectedRoutes';
import { useEffect } from 'react';
import Cek from './pages/Cek';
import Edit from './pages/Edit';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    };
    checkIfLogin();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoutes isLogin={isLogin}>
            <Dashboard /> {/* ini children */}
          </ProtectedRoutes>
          } />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
