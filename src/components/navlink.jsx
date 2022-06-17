import React from 'react'

const Navlink = (props) => {
  return (
    <div className='navlink'>
        <a href= {props.link}><span>&lt;</span>{props.title}<span>&gt;</span></a>
    </div>
  )
}

export default Navlink