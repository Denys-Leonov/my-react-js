import React, { useEffect, useRef, useState } from 'react'
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
import { useObserver } from '../components/hooks/useObserver'
import MySelect from '../components/UI/select/MySelect'

function Posts() {
  const lastElem = useRef()

  const [post, setPost] = useState({ title: '', body: '' }) // this is needed to have a possibility to clean a new post's fields

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [visible, setVisible] = useState(false)

  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(5)

  const [fetchPosts, isLoading, postError] = useFetching(async (page, limit) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
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
    fetchPosts(page, limit)
  }, [page, limit])

  function updatePages(page) {
    setPage(page)
  }

  useObserver(lastElem, page < totalPages, isLoading, () => setPage(page + 1))

  return (
    <div className="App">
      <div className="btn__right">
        <MyButton create="true" onClick={() => setVisible(true)}>
          Create post
        </MyButton>
      </div>
      <MyModal visible={visible} setVisible={setVisible} setPost={setPost}>
        <PostForm create={createPost} post={post} setPost={setPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Amount of items"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' }, 
          { value: -1, name: 'show all' }, 
        ]}
      />
      {postError && <h1>Error: {postError}</h1>}
      {isLoading && (
        <div className="loader-div">
          <MyLoader color="rgb(30, 228, 228)" />
        </div>
      )}

      <div className="stopFloat">
        <PostList
          remove={removePost}
          posts={sorterAndSearchedPosts}
          title="List of posts #1"
        />
        <div ref={lastElem} style={{ height: '10px', background: 'red' }}></div>
        <Pagination
          totalPages={totalPages}
          updatePages={updatePages}
          page={page}
        />
      </div>
    </div>
  )
}

export default Posts
