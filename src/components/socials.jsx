import React from 'react'
import { icons } from './images'

const Socials = () => {
  return (
    <div>
         <div className='contact-logo'>
                <div>
                {/* <p>twitter</p> */} <a href="https://twitter.com/chifez4u"><img src={icons.twitter} alt="" /></a>
                </div>
                <div>
                {/* <p>linkedIn</p> */}
                <a href="https://www.linkedin.com/in/ifeanyi-emmanuel-nwosu-81a027147/">
                     <img src={icons.linkedin} alt="" />
                     </a>
                </div>
                <div>
                {/* <p>github</p> */}
                <a href="https://github.com/Chifez"><img src={icons.github} alt="" /></a>
                </div>
            </div>
    </div>
  )
}

export default Socials