import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center py-5 mt-5 ">
            <h1 className="display-1 fw-bold">404</h1>
            <p className='mt-3'>sorry page not found</p>
            <Link to="/" className='btn btn-secondary fs-5 mt-3'>Take me back to home</Link>
        </div>
    )
}

export default Error