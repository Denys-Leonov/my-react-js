import React, { useState } from 'react'

const Counter = function () {
  const [count, setCount] = useState(0)

  function decrement() {
    setCount(count - 1)
  }

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
