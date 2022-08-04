import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext)
  function logOut() {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logOut}>Exit</MyButton>
      <div className="navbar__links">
        <NavLink className="navLink" to="/posts">
          <MyButton>Posts</MyButton>
        </NavLink>
        <NavLink className="navLink" to="/about">
          <MyButton>About</MyButton>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
