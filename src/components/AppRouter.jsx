import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes } from '../router/routes'
import ErrorPage from '../pages/ErrorPage'
import MyLoader from './UI/Loader/MyLoader'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <MyLoader />
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}

      <Route
        path="*"
        element={
          isAuth ? <Navigate to={'/posts'} /> : <Navigate to={'/login'} />
        }
      />
    </Routes>
  )
}

export default AppRouter
