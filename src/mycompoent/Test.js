import React, { useState } from 'react'


export default function Test() {
  const [value, setValue] = useState(0)
  // function update(){
  //   //setValue(value+1) OR  setValue(X=>X+1) 
  // }
  //instad of use in a simple function we need to use an arrow function
  const inc = () => setValue(prev=>prev+1);
  const dic = () => setValue(prev =>prev -1)
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={inc} >Add</button>
      <button onClick={dic}>DICR</button>
    </div>
  )
  }

