import React, { useState } from 'react'
import PostForm from './components/PostForm'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'
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
    { id: 4, title: 'C++', body: 'bJavascript is a programming language #4' },
    { id: 5, title: 'C#', body: 'Javascript is a programming language #5' },
    { id: 6, title: 'Java', body: 'aJavascript is a programming language #6' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))

  function sortPosts(sort) {
    setSelectedSort(sort)
  }

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) { 
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr
        style={{ margin: '15px 0px', border: '1px solid rgb(2, 254, 216)' }}
      />

      <MyInput placeholder="Searching..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        options={[
          { name: ' title', value: 'title' },
          { name: 'body', value: 'body' },
        ]}
        defaultValue={'Sorting by'}
      />

      {posts.length ? (
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
