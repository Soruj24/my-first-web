import React from 'react'

export default function Card() {
    const name = "Soruj Mahmud"
    const des = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, atque sequi iure accusamus est adipisci accusantium quasi nihil quas corrupti aperiam dolores tempore, ad illum soluta quam aspernatur ut cumque.'
    const date = new Date()
    const d = date.getDate()
    const m = date.getMonth()
    const y = date.getFullYear()
    return (
        <div className='container'>
            <div className='card'>
                <h1 className='card-title'>{name}</h1>
                <p className='card-des'>{des}</p>
                <p className='card-date'>{d + '/' + m + '/' + y}</p>
            </div>
        </div>
    )
}
