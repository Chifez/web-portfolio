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
           <h2> <span>&lt;</span>EM./<span>&gt;</span> </h2>
        </div> 
        <nav>
            <Navlink link ="/"title = "home"/>
            <Navlink link ="/"title = "about"/>
            <Navlink link ="/" title = "works"/>
        </nav>
    </div>
    <div className='fill'><div style={{width: `${scrollPos}` , backgroundColor:'blue', height:'2px'}}></div></div>
    </div>

        <Outlet />
    </>
  )
}
export default Navbar