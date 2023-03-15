import React, { useState } from 'react'

const UseState = () => {

    const [car, serCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1962",
        color: "Red"
    })
    const updateColor = () => {
        serCar(previousState => {
            return { ...previousState, color: "blue" }
        })
    }
    return (
        <div>

            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
            <button onClick={updateColor}>Blue</button>
        </div>
    )
}

export default UseState