import React, { useRef,useState,useEffect } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Socials from './socials'


const Error = styled.p`
font-size:0.9rem;
color:red;
margin-top:1rem;
`;

const Contact = () => {
 const [inputs,setInput] = useState({
    name: "",
    email:'',
    message: '',
 })

 const [error,setError] = useState('')
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    if (inputs.name !== "" && inputs.email !== '' && inputs.message !== ''){
        emailjs.sendForm('service_nui15cb', 'template_st0j9ko', form.current, 'lKJKWfa5KNATdI8ZE')
          .then((result) => {
              console.log(result.text);
              alert('email sent')
          },(error) => {
            //   console.log(error.text);
            //   const Message = error.text;
              setError('something went wrong')
          });

    }else{
        setError('incomplete details')
    }
  };


  useEffect(() => {
    if (error){
        const timer = setTimeout(() => {
          setError('');
        }, 3000);
        return () => clearTimeout(timer);
    }
  },[error])


  

  return (
      <div className='contacts' id="contact">
      <div className='contact'>
          <h2>say hi</h2>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='form'>
                        <label htmlFor="name">name</label>
                        <input type="text" name="user_name" value ={inputs.name}onChange = {(e)=>setInput({...inputs, name: e.target.value})}/>
                    </div>

                    <div className='form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="user_email" value={inputs.email} onChange= {(e)=>setInput({...inputs, email: e.target.value})}/>
                    </div>

                    <div className='form'>
                        <label htmlFor="name">Message</label>
                        <textarea name="message" value={inputs.message} onChange= {(e)=>setInput({...inputs, message: e.target.value})}></textarea>
                    </div>
                    {error && <Error>{error}</Error>}
                    <button type="submit"><span>&lt;</span> Send <span>/&gt;</span></button>
                </form>
      </div>
            <Socials />
      </div>
  )
}

export default Contact