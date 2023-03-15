 import React from 'react'
 
 const Child = (props) => {
  const data = " I am Child component"
  props.onChildData(data)
   return (
     <div>
      
     </div>
   )
 }
 
 export default Child