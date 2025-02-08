import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import Tv from './Components/TV/Tv'
import Notfound from './Components/Notfound/Notfound'
import Layout from './Components/Layout/Layout'


function App() {
  const [count, setCount] = useState(0)

  let routes = createBrowserRouter([{
    path: "",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path : "movies",element :<Movies/>},
      {path : "tv" , element :<Tv/>},
      {path:"*",element :<Notfound/>}
]
  }])

  return ( 
     <>
    <RouterProvider router={routes}></RouterProvider>
     </>
  )
}

export default App
