import React, { useState } from "react";

export default function Red() {
    const [color, setColor] = useState();
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    const updateColor = () => {
        setColor(previousState => {
            return { ...previousState, color: "blue" }
        })
    }
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("Red")}>Red</button>
            <button onClick={() => setColor("Pink")}>Pink</button>
            <button onClick={() => setColor("Green")}>Green</button>
            <h1>My {car.brand}</h1>
            <p>It is {car.color} {car.model} from {car.year}</p>
            <button onClick={updateColor}>Blue</button>
        </>
    );
}
