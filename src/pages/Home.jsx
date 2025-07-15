import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Banner from '../components/banner/Banner'
import Shop from './Shop'
import MenProducts from '../components/productByCategory/MenProducts'

const Home = () => {
  return (
    <>
    <Banner/>
    <MenProducts/>
    <Shop/>
    </>
  )
}

export default Home