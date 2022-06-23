import React from 'react'

const WorkCard = (props) => {
  return (
    Object.values(props).map((props)=>
    <div className={props.className}>
        <div className='title'>
            <div className='link'>
                <a href={props.link}>
                <h2>{props.title}</h2>
                </a>

                <a href={props.links}>
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