import React from 'react'


import "../About/AboutStyle.css"
import Navbar from '../../Components/Navbar/Navbar'
import Model from './Components/Model/Model'
import Model2 from './Components/Model/Model2'
import Video from './Components/Model/Video'
import Model3 from './Components/Model/Model3'
import Model4 from './Components/Model/Model4'
import Model5 from './Components/Model/Model5'
import Footer from "../../Components/Footer/Footer"


const About = () => {
  return (
    <>
    <Navbar/>
    <Model/>
    <Model2/>
    <Video/>
    <Model3/>
    <Model4/>
    <Model5/>
    <Footer/>

    
    </>
  )
}

export default About