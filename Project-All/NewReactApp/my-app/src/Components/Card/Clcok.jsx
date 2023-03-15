import React, {  } from 'react'

export default function Clock() {

    return (
        <div>
            {
                new Date().toLocaleTimeString()
            }
        </div>
    )
}
