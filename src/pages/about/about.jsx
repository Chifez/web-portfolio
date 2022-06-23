import React from 'react'
import "./about.css"
import {icons} from '../../../src/components/images'



const About = () => {
  const {html,css,javascript,react,sass,tailwindcss,firebase,git,github} = icons
  return (
    <div className='about' id="about">
        <h2>About EM.</h2>
        <div className='about_content'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed iste beatae esse adipisci cumque debitis? Sit, atque impedit? Culpa nesciunt totam eveniet perspiciatis soluta odit ex veniam earum cupiditate inventore. Illum accusamus repellendus qui a! Cumque velit exercitationem iure, neque explicabo rerum quas eos earum, totam maxime est dolor!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, ipsa ipsum quod quae iste impedit commodi nam quidem nobis, earum dolorem, cumque illum iure sapiente voluptatem placeat. Et, nisi cumque, ab excepturi quasi, cupiditate explicabo deleniti dolores accusamus totam consequatur perspiciatis sint non laudantium eius nesciunt repellat reiciendis! Nulla, consequatur.</p>
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
              <li><img src={git} alt="git" /></li>
              <li><img src={github} alt="github" /> </li>

              <li><img src={html} alt="html" /></li>
              <li><img src={css} alt="css" /></li>
              <li><img src={javascript} alt="javascript" /></li>
              <li><img src={react} alt="react" /></li>
              <li> <img src={sass} alt="sass" /></li>
              <li> <img src={tailwindcss} alt="tailwindcss" /></li>
              <li><img src={firebase} alt="firebase" /></li>
              <li><img src={git} alt="git" /></li>
              <li><img src={github} alt="github" /> </li>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About