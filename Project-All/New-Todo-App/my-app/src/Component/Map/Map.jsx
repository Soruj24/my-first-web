import React from 'react'

import { date } from '../Date'
export default function Map() {
    return (
        <div>
            {date.map((todo) => {
                return <div className='container'>
                    <div key={todo.id} className="card">
                    <h1 className='card-title'>{todo.title}</h1>
                    <p className='card-des' >{todo.dec}</p>
                </div>
                </div>
            })}
        </div>
    )
}
