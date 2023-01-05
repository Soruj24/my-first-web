import React from 'react'

export default function Card(props) {


  
  const data = new Date();
  const d = data.getMonth()
  const newDate = data.getDate()
  const day = data.getFullYear()
  const {cardDcse,cardTitle} =props;
  return (
    
    <div>

      <div className='card'>
        <h2 className='cardTitle'>{cardTitle}</h2>
        <p className='cardDcse'>{cardDcse}</p>
        <p className='cardFootr'>{`${d} / ${newDate} / ${day}`}</p>

      </div>
    </div>
  )
}
