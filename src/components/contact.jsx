import React from 'react'
import Socials from './socials'


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
            <Socials />
      </div>
  )
}

export default Contact