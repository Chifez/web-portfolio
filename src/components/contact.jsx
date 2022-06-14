import React from 'react'

const Contact = () => {
  return (
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
                    <button>Send</button>
                </form>
      </div>
  )
}

export default Contact