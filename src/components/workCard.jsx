import React from 'react'

const WorkCard = (props) => {
  return (
    Object.values(props).map((props)=>
    <div className={props.className}>
        <div>
       <a href={props.link}>
       <h2>{props.title}</h2>
       </a>
       <div>
           {props.tools.map((tool)=>
           <p>{tool}</p>
           )}
       </div>

        </div>
        <p>{props.description}</p>
    </div>
    )
  )
}

export default WorkCard