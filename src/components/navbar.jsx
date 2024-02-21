import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';
import styled from 'styled-components';
import Navlink from './navlink';
import { motion } from 'framer-motion';
import Burger from './burger';
import Socials from './socials';
import { Navigation } from './styled';

const Navbar = () => {
  const { scrollPos, open } = useContext(AppContext);

  return (
    <>
      <div>
        <div className="navbar">
          <div>
            <h2>EM.</h2>
          </div>

          <Burger />
          <Navigation open={open}>
            <Navlink link="#home" title="home" />
            <Navlink link="#about" title="about" />
            <Navlink link="#works" title="works" />
            <>
              <Socials />
            </>
          </Navigation>
        </div>
        <motion.div
          className="fill"
          style={{ width: `${scrollPos}%`, height: '2px' }}
        ></motion.div>
      </div>
    </>
  );
};
export default Navbar;
