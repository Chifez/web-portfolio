import React,{useContext,useEffect, useState} from 'react'
import AppContext from '../context/context'
import styled from 'styled-components'
import Navlink from './navlink'
import { motion } from 'framer-motion'
import Burger from './burger'
import Socials from './socials'
import { Navigation } from './styled'


const Navbar = () => {
  const {scrollPos, open} = useContext(AppContext);
  const [isOpen,setIsOpen] = useState('')

  

//  const nav = () =>{
//   if (open){
//     setIsOpen('fade-left');
//     console.log(isOpen)
//   }else {
//   setIsOpen('');
//   }
//  }

// useEffect(()=>{
//  nav();
// },[open])
  return (
    <>
    <div>
    <div className='navbar'>
       <div>
           <h2>EM.</h2>
        </div> 

        <Burger />
          <Navigation open= {open}
          // data-aos={isOpen} data-aos-duration='500'
          >
              <Navlink link ="#home"title = "home" />
              <Navlink link ="#about"title = "about"/>
              <Navlink link ="#works" title = "works"/>
              <>
                <Socials />
              </>
          </Navigation>
    </div>
    <motion.div className='fill' style={{width: `${scrollPos}%`, height:'2px'}}>
          {/* <div >    
          </div> */}
    </motion.div>
    </div>
    </>
  )
}
export default Navbar