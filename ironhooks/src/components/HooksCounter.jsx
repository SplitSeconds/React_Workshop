import React, { useState } from 'react'

const HooksCounter = () => {
  // const [count, setCount] = useState(initalState)
  // fixed synax: first one variable, second one function
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>I am Hooks Counter</h1>
      <h1>{count}</h1>
      {/* calls function on button click and sets it's functionality*/}
      <button onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(count - 1)}>-</button>
    </div>
  )
}
  export default HooksCounter;