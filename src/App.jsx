import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Apartment from './pages/Apartment/Apartment'
import Finish from './pages/Finish/Finish'

import Error from './pages/Error/Error'


const router = createBrowserRouter([
  
  
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
  {
    path: '/apartment',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Apartment />,
        errorElement: <Error />,
      },
      
      {
        path: '/apartment/contact',
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: '/apartment/finish',
        element: <Finish />,
        errorElement: <Error />,
      },
      
          
      
      
    ],
  },
])
function App() {
  const [state, setState] = useState('')
  return (
    <div className='App'>
      <AppContext.Provider value={{  }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
