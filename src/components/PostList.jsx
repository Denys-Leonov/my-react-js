import React from 'react'
import PostItem from './PostItem'


const PostList = ({posts, title, remove}) => {
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((p, index) => (
        <PostItem remove={remove} post={p} key={p.id} number={index + 1} />
      ))}
    </div>
  )
}

export default PostList