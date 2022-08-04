import About from '../pages/About'
import Login from '../pages/Login'
import Posts from '../pages/Posts'
import SinglePost from '../pages/SinglePost'

export const privateRoutes = [
  { path: '/about', component: <About /> },
  { path: '/posts', component: <Posts /> },
  { path: '/posts/:id', component: <SinglePost /> },

]
export const publicRoutes = [
  { path: '/login', component: <Login /> },
]


