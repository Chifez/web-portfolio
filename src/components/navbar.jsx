import React,{useContext} from 'react'
import AppContext from '../context/context'
import Navlink from './navlink'
import { Outlet } from 'react-router-dom'


const Navbar = () => {
  const {scrollPos} = useContext(AppContext)
  return (
    <>
    <div>
    <div className='navbar'>
       <div>
           <h2>EM.</h2>
        </div> 
        <nav>
            <Navlink link ="#home"title = "home"/>
            <Navlink link ="#about"title = "about"/>
            <Navlink link ="#works" title = "works"/>
        </nav>
    </div>
    <div className='fill'><div style={{width: `${scrollPos}` , backgroundColor:'blue', height:'2px'}}></div></div>
    </div>

        <Outlet />
    </>
  )
}
export default Navbar