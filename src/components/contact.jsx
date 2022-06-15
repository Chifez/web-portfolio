import React from 'react'

const Contact = () => {
  return (
      <div className='contacts'>
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
                <div><img src="" alt="" /> <p>twitter</p></div>
                <div><img src="" alt="" /> <p>linkedIn</p></div>
                <div><img src="" alt="" /> <p>github</p></div>
            </div>
      </div>
  )
}

export default Contact