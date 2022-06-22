import React,{useContext} from 'react'
import AppContext from '../context/context'
import styled from 'styled-components'
import Navlink from './navlink'
import { motion } from 'framer-motion'
import Burger from './burger'
import Socials from './socials'




const Navbar = () => {
  const {scrollPos,open} = useContext(AppContext);

const Navigation  = styled.nav`
@media screen and (max-width:950px) and (min-width:250px){
  transform : ${ open ? 'translateX(0)' : 'translateX(-100vw)'};
}
`;

  return (
    <>
    <div>
    <div className='navbar'>
       <div>
           <h2>EM.</h2>
        </div> 

        <Burger />
        <Navigation>
          <nav>
              <Navlink link ="#home"title = "home"/>
              <Navlink link ="#about"title = "about"/>
              <Navlink link ="#works" title = "works"/>
              <>
                <Socials />
              </>
          </nav>
        </Navigation>
    </div>
    <motion.div className='fill' style={{width: `${scrollPos}%`, backgroundColor:'blue', height:'2px'}}>
          {/* <div >    
          </div> */}
    </motion.div>
    </div>
    </>
  )
}
export default Navbar