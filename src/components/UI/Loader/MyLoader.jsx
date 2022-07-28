import React from 'react'
import cl from './MyLoader.module.css'

const MyLoader = ({ color }) => {
  return <div style={{ color: color }} className={cl.loader}></div>
}

export default MyLoader
