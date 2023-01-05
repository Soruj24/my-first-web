import React from 'react'
import Clock from './Clcok'

export default function Card1() {
    const cardTitle = "Call Family"
    const cardDese = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias exercitationem accusantium cum, harum voluptatibus, sed veniam maiores officia vitae possimus veritatis libero ducimus, doloremque et eum totam id neque."
     
    return (
        <div className='card'>
            <h3 className='cardTitle'>{cardTitle}</h3>
            <p className='cardDcse'>{cardDese}</p>
            <p className='cardFootr'>{ <Clock />}</p>
        </div>
    )
}
