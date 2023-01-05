import React  from 'react'
import Todos1 from './Todos1'


const todos = ["todo1","todo2"]

const Home = () => {
     
  return (
      <div>
          {
              todos.map((todos,index) => {
                  return <Todos1 todos={todos} key={index} />
              })
          }
    </div>
  )
}

export default Home