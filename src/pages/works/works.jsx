import React from 'react'
import { cards } from '../../components/card'
import WorkCard from '../../components/workCard'
import './works.scss'

const Works = () => {
  return (
    <div className='works'>
        <h2> 03. works /</h2>

        <div className='cards'>
            {cards.map((card, index)=>
            <WorkCard key={index} props={card} />
            )}
        </div>
    </div>
  )
}

export default Works