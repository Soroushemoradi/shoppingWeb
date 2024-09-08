import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from './components/layers/header/Nav'
import Home from './components/layers/main/Home'
function App() {
  const pages = [{
    path: '/home',
    element: <Home />
  },
  {
    path: '/Gallery',
    element: <p>mio2</p>
  },
  {
    path: '/faq',
    element: <p>mio3</p>
  }, {
    path: '/contact_Us',
    element: <p>mio4</p>
  }]
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
