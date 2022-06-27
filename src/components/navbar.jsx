import React,{useContext,useEffect, useState} from 'react'
import AppContext from '../context/context'
import styled from 'styled-components'
import Navlink from './navlink'
import { motion } from 'framer-motion'
import Burger from './burger'
import Socials from './socials'


const Navbar = () => {
  const {scrollPos, open} = useContext(AppContext);
  const [isOpen,setIsOpen] = useState('')

  const Navigation  = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .contact-logo{
    display:none;
  }
  
  @media screen and (max-width:950px) and (min-width:250px) {
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    left:0;
    right: 0;
    top:2px;
    background-color: black;
    width:100%;
    height: 70vh;
    // isolation: isolate;
    z-index: -1;
    transform: translateX(-100%);
    transform : ${open ? 'translateX(0)' : 'translateX(-100%)'};
    transition:'transform .5s ease-in';
    background:'black';

    .contact-logo{
      display:flex;
    }

  }
  `;

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
          <Navigation 
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