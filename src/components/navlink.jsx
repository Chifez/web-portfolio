import React from 'react'

const Navlink = (props) => {
  return (
    <div className='navlink'>
        <h2> <span>&lt;</span>{props.title}<span>&gt;</span></h2>
    </div>
  )
}

export default Navlink