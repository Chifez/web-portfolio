import React from 'react'
import { icons } from './images'

const Contact = () => {
  return (
      <div className='contacts' id="contact">
      <div className='contact'>
          <h2>say hi</h2>
                <form className='contact-form'>
                    <div className='form'>
                        <label htmlFor="name">name</label>
                        <input type="text" name='name' />
                    </div>

                    <div className='form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>

                    <div className='form'>
                        <label htmlFor="name">Message</label>
                        <textarea></textarea>
                    </div>
                    <button><span>&lt;</span> Send <span>/&gt;</span></button>
                </form>
      </div>
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
                <a href="https://github.com/Chifez"><img src={icons.git} alt="" /></a>
                </div>
            </div>
      </div>
  )
}

export default Contact