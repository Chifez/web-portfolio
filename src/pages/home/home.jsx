import React from 'react'
import Contact from '../../components/contact'
import HomeBody from '../../components/homeBody'

import "./home.css"

const Home = () => {
  return (
    <div className='home'>
        <HomeBody />
        <Contact />
    </div>
  )
}

export default Home