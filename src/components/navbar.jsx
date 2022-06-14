import React from 'react'
import Navlink from './navlink'

const Navbar = () => {
  return (
    <div>
       <div>
           <h2> <span>&lt;</span>EM./<span>&gt;</span> </h2>
        </div> 
        <nav>
            <Navlink title = "home"/>
            <Navlink title = "about"/>
            <Navlink title = "works"/>
        </nav>
    </div>
  )
}
export default Navbar