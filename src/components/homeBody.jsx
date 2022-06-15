import React from 'react'
import Typewriter from 'typewriter-effect'

const HomeBody = () => {
  return (
    <div className='body'>
       
            {/* <div className='body-logo'>
                <div><img src="" alt="" /> <p>twitter</p></div>
                <div><img src="" alt="" /> <p>linkedIn</p></div>
                <div><img src="" alt="" /> <p>github</p></div>
            </div> */}
            <div className='body-img'>
                <img src="" alt="" />
            </div>
            <div className='body-content'>
                <h2>
                    web developer
                </h2>
                <p>
                    <Typewriter onInit={(typewriter)=>{
                        typewriter.typeString('i am emmanuel,')
                        .pauseFor(1000)
                        .typeString(' a web developer from lagos,Nigeria with keen interest in interactive web applications')
                        .changeDelay(50)
                        .start();
                    }}/>
                    
                    {/* a web developer from lagos,Nigeria with keen interest in interactive web applications  */}
                </p>
                <button><a href="/#"><span>&lt;</span> view my work <span>/&gt;</span></a></button>
            </div>
    </div>
  )
}

export default HomeBody