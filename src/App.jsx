import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/UI/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
