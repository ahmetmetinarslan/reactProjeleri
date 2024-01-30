import React from 'react'

import Card from '../card/Card'
import './Cardlist.css'

export default function Cardlist({ monsters }) {
  return (
    <div className='cardlist'>
        {
           monsters.map((monster) => {
            return <Card monster={monster} />
           }) 
        }
    </div>
  )
}
