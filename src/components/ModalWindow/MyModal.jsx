import React from 'react'
import cl from './MyModal.module.css'

const ModalWindow = ({ children, visible, setVisible, setPost }) => {
  const rootClass = [cl.myModal]
  if (visible) {
    rootClass.push(cl.active)
  }

  return (
    <div
      className={rootClass.join(' ')}
      onClick={() => {
        setVisible(false)
        setPost({title: '', body: ''})
      }}
    >
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow
