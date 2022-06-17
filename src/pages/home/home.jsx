import React from 'react'
import Contact from '../../components/contact'
import HomeBody from '../../components/homeBody'
import About from '../about/about'
import Works from "../works/works";

import "./home.css"

const Home = () => {
  return (
    <div className='home'>
        <HomeBody />
        <About />
        <Works />   
        <Contact />
    </div>
  )
}

export default Home