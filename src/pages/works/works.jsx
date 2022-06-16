import React from 'react'
import { cards } from '../../components/card'
import WorkCard from '../../components/workCard'

const Works = () => {
  return (
    <div>
        <h2> 03. works /</h2>

        <div>
            {cards.map((card, index)=>
            <WorkCard key={index} props={card} />
            )}
        </div>
    </div>
  )
}

export default Works