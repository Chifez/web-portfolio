import React from 'react'
import { cards } from '../../components/card'
import WorkCard from '../../components/workCard'
import './works.scss'

const Works = () => {
  return (
    <div className='works' id="works">
      <div className='works_header'>
        <h2><span>&lt;</span>works./<span>&gt;</span></h2>
      </div>

        <div className='cards'>
            {cards.map((card, index)=>
            <WorkCard key={index} props={card} />
            )}
        </div>
    </div>
  )
}

export default Works