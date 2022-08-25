import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './pages/HOC/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard /> {/* ini children */}
          </ProtectedRoutes>
          } />


      </Routes>
    </div>
  )
}

export default App
