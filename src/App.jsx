import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from './components/header/nav/Nav'
import Home from './components/home/Home'
import Gallery from './components/gallery/Gallery'
import ProudPage from './components/gallery/product/ProudPage'
import Error from './components/404Eror/Error'
import ContactUs from './components/ContactUs/ContactUs'
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
    element: <p>f&Q</p>
  }, {
    path: '/contact_Us',
    element: <ContactUs/>
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

          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
