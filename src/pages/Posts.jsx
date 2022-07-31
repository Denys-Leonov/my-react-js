import React, { useEffect, useState } from 'react'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyModal from '../components/ModalWindow/MyModal'
import '../styles/App.css'
import MyButton from '../components/UI/button/MyButton'
import usePosts from '../components/hooks/usePosts'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/Loader/MyLoader'
import { useFetching } from '../components/hooks/useFetching'
import { getPageCount } from '../utils/pages'
import Pagination from '../components/UI/pagination/Pagination'

function Posts() {
  const [post, setPost] = useState({title:'', body:''}) // this is needed to have a possibility to clen a new post's fields
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [visible, setVisible] = useState(false)

  const [totalPages, setTotalPages] = useState(0) 
  const [page, setPage] = useState(1)
  const [limit] = useState(10)

  const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const sorterAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  function updatePages(page) {
    setPage(page)
    fetchPosts(limit, page)
  }


  return (
    <div className="App">
      <div className='page__wrapper'>
        <MyButton
          onClick={() => setVisible(true)}
        >
          Create post
        </MyButton>
      </div>

      <MyModal visible={visible} setVisible={setVisible} setPost={setPost}>
        <PostForm create={createPost} post={post} setPost={setPost}/>
      </MyModal>
      <hr
        style={{ margin: '15px 0px', border: '1px solid rgb(2, 254, 216)' }}
      />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: {postError}</h1>}
      {!isLoading ? (
        <div>
          {' '}
          <PostList
            remove={removePost}
            posts={sorterAndSearchedPosts}
            title="List of posts #1"
          />
          <Pagination totalPages={totalPages} updatePages={updatePages} page={page}/>
        </div>
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

export default Posts