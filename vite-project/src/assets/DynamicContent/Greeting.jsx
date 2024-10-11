import React from 'react'

function Greeting() {

    const name =  "Learn react vaiii"
    const newDates=new Date().toLocaleDateString();
  return (
    <div>
        <h1>{name}</h1>
        <p>{newDates}</p>
    </div>
  )
}

export default Greeting