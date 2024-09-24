import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import navs from './navData';
import SearchBar from './SearchBar';
import '../header.css'
function Navigation() {

  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <Navbar className='mt-3 nav-xs'>
        <Container className='grid3 border rounded-4 p-3 container'>
          <div>
            <Navbar.Brand className='me-5'><Link className='text-decoration-none text-secondary' to={"/"}>logo</Link></Navbar.Brand>
          </div>
          <div>
            <Nav className="flex-center gap-4">
              {
                navs.map(({ href, text }) => <Link key={href} to={href} className='text-decoration-none text-secondary ms-2 font-weight-bold '>{text}</Link>)
              }
            </Nav>
          </div>
          <div>
            <SearchBar/>
          </div>
        </Container>
      </Navbar>
      <button className='btn btn-nav mt-3 ms-2' onClick={() => setShowNav(!showNav)}><FontAwesomeIcon icon={!showNav ? faBars : faTimes} /></button>
      <nav className={`mt-3 nav-mobile bg-light w-75 mx-auto rounded-4 ${showNav ? "nav-mobile__open" : "nav-mobile__hidden"}`}>

        <div className='nav-mobile-item pb-3 pt-2'>
          <div>
            <div className=" gap-4 ms-5">
              {
                navs.map(({ href, text }) => <React.Fragment key={text}><div className='mb-2'> <Link key={href} to={href} className='text-decoration-none text-secondary ms-2 font-weight-bold '>{text}</Link> <div className='border w-75'></div></div></React.Fragment>)
              }
            </div>
          </div>
          <div className='ms-5 mt-2'>
          <SearchBar/>
          </div>
        </div>


      </nav>
    </>
  )
}
export default Navigation