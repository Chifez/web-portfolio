import React from 'react'
import Contact from '../../components/contact'
import HomeBody from '../../components/homeBody'
import About from '../about/about'

import "./home.css"

const Home = () => {
  return (
    <div className='home'>
        <HomeBody />
        <About />
        <Contact />
    </div>
  )
}

export default Home