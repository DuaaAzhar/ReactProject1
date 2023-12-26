import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Contact, User, Github} from './components'
import { githubInfoLoader } from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])
// .....................OR.............................

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      {/* to pass dynamic value from url */}
      <Route path='user/:userId' element={<User/>}/>
      {/* to fetch the data from api through routes, we can also use direct fetch() from api here
      instead of this method */}
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/> 
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
