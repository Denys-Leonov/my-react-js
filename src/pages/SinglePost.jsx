import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'
import PostItem from '../components/PostItem'
import MyLoader from '../components/UI/Loader/MyLoader'

const SinglePost = () => {
  const { id } = useParams()

  function remove() {
    setPost('')
  }

  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPostById(id)
    setPost(response.data)
  })

  const [comments, setComments] = useState([])
  const [fetchCommentsById, isCommentsLoading, comentsError] = useFetching(
    async (id) => {
      const response = await PostService.getPostById(id)
      setComments(response.data)
    }
  )

  useEffect(() => {
    async function x() {
      await fetchPostById(id)
      await fetchCommentsById(id + '/comments')
    }
    x()
  }, [])

  return (
    <div className="App">
      <h1>Empty Page for post#{id}</h1>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <MyLoader color="rgb(30, 228, 228)" />{' '}
        </div>
      ) : (
        <div>
          <PostItem post={post} isSingle={true} remove={remove} />
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            Comments:
          </h1>
          {isCommentsLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '15px',
              }}
            >
              <MyLoader color="rgb(30, 228, 228)" />{' '}
            </div>
          ) : (
            comments.map((comment, index) => {
              return (
                <div
                  style={{
                    border: '1px solid black',
                    margin: '5px 0',
                    padding: '5px',
                  }}
                  key={comment.id}
                >
                  <h3>
                    [{index + 1}]. Author: {comment.email}
                  </h3>
                  <p>
                    <strong>Title:</strong> {comment.name}
                  </p>
                  <p>
                    <strong>Description: {comment.body}</strong>
                  </p>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

export default SinglePost
