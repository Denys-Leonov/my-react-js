import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
function App() {
  const [value, setValue] = useState('Some text')



  return (
    <div className="App">
     <ClassCounter />
    </div>
  )
}

export default App
