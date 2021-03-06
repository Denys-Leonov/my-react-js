import React, { useState } from 'react'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {

  const arr = [
    {
      id: 1,
      title: 'Javascript',
      body: 'Javascript is a programming language #1',
    },
    { id: 2, title: 'Python', body: 'Javascript is a programming language #2' },
    { id: 3, title: 'C+', body: 'Javascript is a programming language #3' },
    { id: 4, title: 'C++', body: 'Javascript is a programming language #4' },
    { id: 5, title: 'C#', body: 'Javascript is a programming language #5' },
    { id: 6, title: 'Java', body: 'Javascript is a programming language #6' },
  ]
  
  
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder='Post title'/>
        <MyInput type="text" placeholder='Post description'/>
        <MyButton disabled>Save</MyButton>
      </form>

      <PostList posts={arr} title='List of posts #1'/>
    </div>
  )
}

export default App
