import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Home