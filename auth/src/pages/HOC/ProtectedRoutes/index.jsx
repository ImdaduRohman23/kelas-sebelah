import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({isLogin, children}) => {
    if(!isLogin) {
        return <Navigate to="/login" replace/>
    } 

    return children
}

export default ProtectedRoutes
