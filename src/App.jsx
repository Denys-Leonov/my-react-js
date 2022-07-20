import React, { useState } from 'react'
import PostForm from './components/PostForm'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
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

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="List of posts #1" />
      ) : (
        <h1 style={{ textAlign: 'center', color: 'rgb(2, 254, 216)' }}>
          Posts not found
        </h1>
      )}
    </div>
  )
}

export default App
