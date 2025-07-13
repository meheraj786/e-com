import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Banner from '../components/banner/Banner'
import Shop from './Shop'

const Home = () => {
  return (
    <>
    <Banner/>
    <Shop/>
    </>
  )
}

export default Home