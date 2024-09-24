import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from './components/header/nav/Nav'
import Home from './components/home/Home'
import Gallery from './components/gallery/Gallery'
import ProudPage from './components/gallery/product/ProudPage'
function App() {
  const pages = [{
    path: '/',
    element:<Home/>
  },
  {
    path: '/Gallery',
    element:<Gallery/>
  },
  {
    path: '/faq',
    element: <p>mio3</p>
  }, {
    path: '/contact_Us',
    element: <p>mio4</p>
  },
    {
      path: `Gallery/:id`,
      element:<ProudPage/>
    }

]
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          {
            pages.map(({ path, element }) => <Route key={path} path={path} element={element} />)
          }

          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
