import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
  if (posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        {posts.map((p, index) => (
          <PostItem remove={remove} post={p} key={p.id} number={index + 1} />
        ))}
      </div>
    )
  }
  return (
    <h1 style={{ textAlign: 'center', color: 'rgb(2, 254, 216)' }}>
      Posts not found
    </h1>
  )
}

export default PostList
