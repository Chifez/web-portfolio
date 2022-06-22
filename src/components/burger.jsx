import React,{useContext} from 'react'
import AppContext from '../context/context'
import styled from 'styled-components';





const Burger = () => {
 
const {open,setIsOpen} = useContext(AppContext);

const Nav = styled.div`
display:none;
@media screen and (max-width:950px) and (min-width:250px){
  position:fixed;
  width:100%;
  height:20px;
  display:flex;
  right:-90%;
  justify-content:space-around;
  flex-direction:column;
  margin-right:2rem;
  z-index:1000;
  transition: all .3s ease-in;
  
  div{
    width:2rem;
    height:0.25rem;
    background-color: ${ open ? 'lightgrey' : 'white'};
    transform-origin: 6px;

    &:nth-child(1){
      transform : ${ open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    &:nth-child(2){
      transform : ${ open ? 'translateX(300%)': 'translateX(0)'};
      opacity: ${ open ? '0' : '1'};
    }
    &:nth-child(3){
      transform : ${ open ? 'rotate(-45deg)' : 'rotate(0deg)'};
     
    }

  }
}
`;

  return (
    <Nav value = {open} onClick = {()=>setIsOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </Nav>
  )
}

export default Burger

