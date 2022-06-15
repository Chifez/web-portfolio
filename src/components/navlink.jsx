import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = (props) => {
  return (
    <div className='navlink'>
        <Link to = {props.link}><span>&lt;</span>{props.title}<span>&gt;</span></Link>
    </div>
  )
}

export default Navlink