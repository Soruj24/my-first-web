import React from 'react'


const Nested_Lists = () => {
  const users = [
    {
      fullName: "Soruj Mahmud",
      age: 23,
      phones: [
        {
          home: "01765847571"
        },
        {
          office: "014554545"
        }
      ]
    },
    {
      fullName: "Table",
      age: 43,
      phones: [
        {
          home: "01795397598"
        },
        {
          office: "34554545"
        }
      ]
    }
  ]
  return (
    <div>
      {
        users.map((user, index) => {
          return <article key={index}>
            <h1> Full Name : {user.fullName}</h1>
            <p> Age : {user.age}</p>
            {
              user.phones.map((phone, index) => {
                return <div key={index}>
                  <p> Home:{phone.home}</p>
                  <p>Office:{phone.office}</p>
                </div>
              })
            }
          </article>
        })
      }
    </div>
  )
}

export default Nested_Lists