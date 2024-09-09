import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import navs from './navData';
function Navigation() {
  const [search, setSearch] = useState(false)

  return (
    <>
      <Navbar className='mt-3 '>
        <Container className='grid3 border rounded-4 p-3 container'>
          <div>
            <Navbar.Brand className='me-5' href="/">Navbar</Navbar.Brand>
          </div>
          <div>
            <Nav className="flex-center gap-4">
              {
                navs.map(({ href, text }) => <Link key={href} to={href} className='text-decoration-none text-secondary ms-2 font-weight-bold '>{text}</Link>)
              }
            </Nav>
          </div>
          <div>
            <Form inline className='d-flex'>
              <button type='button' className=' border border-0 btn-search rounded-5' onClick={() => setSearch(!search)} ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              {search &&
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="inp-search"
                />
              }
            </Form>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation