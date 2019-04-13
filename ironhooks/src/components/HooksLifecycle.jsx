import React, { useEffect, useState } from 'react'

const HooksLifecycle = ({ potato, ananas, banana }) => {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    document.title = `hey ${count} time clicked`;
  })
  return (
    <div>
      <h1>I'm Hooks Lifecycle {potato}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default HooksLifecycle;
