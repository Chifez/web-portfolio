import React from 'react'
import { images } from './images'
import Typewriter from 'typewriter-effect'

const HomeBody = () => {
  return (
    <div className='body' id="home" >
       
            {/* <div className='body-logo'>
                <div><img src="" alt="" /> <p>twitter</p></div>
                <div><img src="" alt="" /> <p>linkedIn</p></div>
                <div><img src="" alt="" /> <p>github</p></div>
            </div> */}
            <div className='body-img'>
              {/* <div>
                <img className="main_left"src={images.main_left} alt="" />
              </div> */}
              <div >
                <img className ="main_right" src={images.avatar} alt="" />
              </div>
            </div>
            <div className='body-content'>
                <h2>
                <Typewriter className="body-title" onInit={(typewriter)=>{
                        typewriter.typeString('FRONTEND WEB DEVELOPER')
                        .pauseFor(1000)
                        .typeString('')
                        .changeDelay(50)
                        .start();
                    }} />
                </h2>
                <p>
                   Hi, i am <span style={{color:'crimson'}}>Emmanuel</span> a web developer from Lagos,Nigeria with keen interest in interactive web applications
                </p>
                <div className='btn'>
                <a href="#works"><button><span>&lt;</span> view my work <span>/&gt;</span></button></a>
                <a href="#contact"><button><span>&lt;</span> contact me <span>/&gt;</span></button></a>
                </div>
            </div>
    </div>
  )
}

export default HomeBody