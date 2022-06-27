// import React from "react";
import styled from 'styled-components';


export const Nav = styled.div`
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
    background-color: ${props => props.open ? 'lightgrey' : 'white'};
    transform-origin: 6px;

    &:nth-child(1){
      transform : ${props => props.open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    &:nth-child(2){
      transform : ${ props => props.open ? 'translateX(300%)': 'translateX(0)'};
      opacity: ${ props => props.open ? '0' : '1'};
    }
    &:nth-child(3){
      transform : ${ props => props.open ? 'rotate(-45deg)' : 'rotate(0deg)'};
     
    }

  }
}
`;


export const Navigation  = styled.nav`
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
    transform : ${ props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
    transition:'transform .5s ease-in';
    background:'black';

    .contact-logo{
      display:flex;
    }

  }
  `;