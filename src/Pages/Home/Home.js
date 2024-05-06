import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


import "../Home/HomeStyle.css"
import Section2 from './Components/Section-2/Section2'
import Section3 from './Components/Section-3/Section3'
import Section4 from './Components/Section-4/Section4'
import Section5 from './Components/Section-5/Section5'
import Section6 from './Components/Section-6/Section6'
import Section7 from './Components/Section-7/Section7'
import Section8 from './Components/Section-8/Section8'
import Footer from "../../Components/Footer/Footer"
// import { Product } from './Components/Section-1/Shop/Product'
import { Shop } from "../Home/Components/Section-1/Shop/Shop"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        {/* <Product/> */}
        <Shop/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Footer/>
    </div>
  )
}

export default Home