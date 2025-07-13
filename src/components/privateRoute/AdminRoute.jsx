import React from 'react'
import { useAuth } from '../../contexts/Auth'
import { Navigate } from 'react-router'

const AdminRoute= ({children})=>{
  const {userIsLoggedIn, role}= useAuth()
  if (!userIsLoggedIn) return <Navigate to="/"/>
  if (role !== "admin") return <Navigate to="/"/>
  return children
}

export default AdminRoute