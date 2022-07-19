import React, { useState } from 'react'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
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
  ])
  const [post, setPost] = useState({title:'', body:''})
  

  function addNewEvent(e) {
    e.preventDefault()

    setPosts([...posts, {id: Date.now(), ...post}])

    //after click
    setPost({title:'', body:''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post title"
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewEvent}>Save</MyButton>
      </form>

      <PostList posts={posts} title="List of posts #1" />
    </div>
  )
}

export default App
