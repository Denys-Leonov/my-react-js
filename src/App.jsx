import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.getItem('isAuth') ? setIsAuth(true) : setIsAuth(false)
    setIsLoading(false)
  }, [isAuth])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading  
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App
