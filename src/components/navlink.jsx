import React,{useContext} from 'react'
import AppContext from '../context/context'

const Navlink = (props) => {
  const {open,setIsOpen} = useContext(AppContext);
  return (
    <div className='navlink' onClick={()=>setIsOpen(!open)}>
        <a href= {props.link}>{props.title}</a>
    </div>
  )
}

export default Navlink