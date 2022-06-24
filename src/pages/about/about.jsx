import React from 'react'
import "./about.css"
import {icons} from '../../../src/components/images'



const About = () => {
  const {html,css,javascript,react,sass,tailwindcss,firebase,git,github} = icons
  return (
    <div className='about' id="about">
        <h2>About EM.</h2>
        <div className='about_content' >
          <p  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
    data-aos-mirror="false">I am a frontend web developer with interests in creating interactive web application with great user interfaces,actively building my skillset to bring to life jaw dropping designs and improve my design prowess.I am strongly of the opinion that if i can think or imagine it, then i can build it!</p>
          <p  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="1050"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
    data-aos-mirror="false">Being a self taught web developer i still have a lot to learn to but asides coding i play chess a lot as this help to build my decision making and time management skills.</p>
        </div>
        <div className='tech_tools'>
          <div>
              <h2>My Tools</h2>
          </div>
          <div className='marquee'>
            <div className='marquee_content'>
              <li><img src={html} alt="html" /></li>
              <li><img src={css} alt="css" /></li>
              <li><img src={javascript} alt="javascript" /></li>
              <li><img src={react} alt="react" /></li>
              <li> <img src={sass} alt="sass" /></li>
              <li> <img src={tailwindcss} alt="tailwindcss" /></li>
              <li><img src={firebase} alt="firebase" /></li>
              <li><img src={git} alt="git"  /></li>
              <li><img src={github} alt="github" style={{filter:'invert(1)'}} /> </li>

              <li><img src={html} alt="html" /></li>
              <li><img src={css} alt="css" /></li>
              <li><img src={javascript} alt="javascript" /></li>
              <li><img src={react} alt="react" /></li>
              <li> <img src={sass} alt="sass" /></li>
              <li> <img src={tailwindcss} alt="tailwindcss" /></li>
              <li><img src={firebase} alt="firebase" /></li>
              <li><img src={git} alt="git"  /></li>
              <li><img src={github} alt="github" style={{filter:'invert(1)'}}/> </li>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About