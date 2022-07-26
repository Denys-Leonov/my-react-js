import React, { useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
// import MyInput from './components/UI/input/MyInput'
// import MySelect from './components/UI/select/MySelect'
import MyModal from './components/ModalWindow/MyModal'
import './styles/App.css'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './components/hooks/usePosts'

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

  const [filter, setFilter] = useState({ sort: '', query: '' })
  // const [selectedSort, setSelectedSort] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')

  const [visible, setVisible] = useState(false)

 
  const sorterAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  

  
  

  return (
    <div className="App">
      <MyButton
        style={{ margin: '15px 0 0 0' }}
        onClick={() => setVisible(true)}
      >
        create
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible} >
        <PostForm create={createPost}/>
      </MyModal>
      <hr
        style={{ margin: '15px 0px', border: '1px solid rgb(2, 254, 216)' }}
      />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sorterAndSearchedPosts}
        title="List of posts #1"
      />
    </div>
  )
}

export default App
