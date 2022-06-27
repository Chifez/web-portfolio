import React from 'react'

const WorkCard = (props,{key}) => {
  return (
    Object.values(props).map((props)=>
    <div className={props.className} key={key} data-aos={props.animate}  data-aos-mirror="false"
    data-aos-once="true" data-aos-duration = "1000">
        <div className='title'>
            <div className='link'>
                <a href={props.link} target='_blank' rel='noreferrer' >
                <h2>{props.title}</h2>
                </a>

                <a href={props.links}  target='_blank'rel='noreferrer'>
                    <img src={props.img} alt="git" />
            
                </a>
            </div>
       <div className='tools'>
           {props.tools.map((tool)=>
           <p>{tool}</p>
           )}
       </div>
        </div>
        <p className='desc'>{props.description}</p>
    </div>
    )
  )
  
}

export default WorkCard