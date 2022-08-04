import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)

  function login(event) {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', true)

  }

  return (
    <div style={{ margin: '100px' }}>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter your password" />
        <MyButton style={{ margin: '0px' }}>Login</MyButton>
      </form>
    </div>
  )
}

export default Login
