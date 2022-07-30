import React, { useEffect, useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyModal from './components/ModalWindow/MyModal'
import './styles/App.css'
import MyButton from './components/UI/button/MyButton'
import usePosts from './components/hooks/usePosts'
import PostService from './API/PostService'
import MyLoader from './components/UI/Loader/MyLoader'
import { useFetching } from './components/hooks/useFetching'
import { getPageCount } from './utils/pages'

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [visible, setVisible] = useState(false)

  const [totalPages, setTotalPages] = useState(0) // here could be more relevant to use 1 as initial value
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  let pagesArray = []
  useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      console.log('it works from the Array')
      pagesArray.push(i + 1)
    }
  }, [totalPages])

  const sorterAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <MyButton style={{ marginTop: '15px' }} onClick={() => setVisible(true)}>
        Create post
      </MyButton>

      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr
        style={{ margin: '15px 0px', border: '1px solid rgb(2, 254, 216)' }}
      />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: {postError}</h1>}
      {!isLoading ? (
        <PostList
          remove={removePost}
          posts={sorterAndSearchedPosts}
          title="List of posts #1"
        />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <MyLoader color="rgb(30, 228, 228)" />
        </div>
      )}
    </div>
  )
}

export default App
