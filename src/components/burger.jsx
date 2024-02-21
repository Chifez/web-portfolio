import React, { useContext } from 'react';
import AppContext from '../context/context';
import { Nav } from './styled';

const Burger = () => {
  const { open, setIsOpen } = useContext(AppContext);

  return (
    <Nav open={open} value={open} onClick={() => setIsOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Nav>
  );
};

export default Burger;
