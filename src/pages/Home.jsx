import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Banner from '../components/banner/Banner'
import Shop from './Shop'
import MenProducts from '../components/productByCategory/MenProducts'
import DressStyle from '../components/dressStyle/DressStyle'
import Logos from '../components/logos/Logos'

const Home = () => {
  return (
    <>
    <Banner/>
    <Logos/>
    <MenProducts/>
    <DressStyle/>
    <Shop/>
    </>
  )
}

export default Home