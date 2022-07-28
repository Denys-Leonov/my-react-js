import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
  if (posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <TransitionGroup>
          {posts.map((p, index) => (
            <CSSTransition key={p.id} timeout={500} classNames="post">
              <PostItem
                remove={remove}
                post={p}
                number={p.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
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
