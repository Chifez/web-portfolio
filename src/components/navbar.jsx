import React from 'react'
import Navlink from './navlink'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
       <div>
           <h2> <span>&lt;</span>EM./<span>&gt;</span> </h2>
        </div> 
        <nav>
            <Navlink link ="/"title = "home"/>
            <Navlink link ="/"title = "about"/>
            <Navlink link ="/" title = "works"/>
        </nav>
    </div>
        <Outlet />
    </>
  )
}
export default Navbar