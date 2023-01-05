 import React from 'react'
 
 const Dates = (props) => {
   return (
     <div>
       <h1>{new Date().toLocaleTimeString()}</h1>
       <p>{props.name}</p>
     </div>
   )
 }
 
 export default Dates
 