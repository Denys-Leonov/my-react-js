import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

const PostItem = ({post, remove, isSingle}) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => remove(post)}>Remove</MyButton>
        { !isSingle &&
          <Link to={`/posts/${post.id}`}>
            
          <MyButton >Open</MyButton>
        </Link>}
      </div>
    </div>
  )
}

export default PostItem
