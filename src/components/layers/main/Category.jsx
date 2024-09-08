import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
function Category() {
    return (
        <>
            <div className='grid-3 mb-5 '>
                <div className="d-flex item-body rounded">
                    <div>
                        <h2 className='mt-3 ms-3'>chairs</h2>
                        <p className='ms-3'>Donec facilisis quam ut purus rutrum lobortis.</p>
                        <div className='btn'>view collection<FontAwesomeIcon className='ms-3' icon={faArrowRight} /></div>
                    </div>
                    <div>
                        <img src="chairs.jpg" alt="pic" className='h-100 w-100'  />
                    </div>
                </div>
                <div className="d-flex item-body rounded">
                    <div>
                        <h2 className='mt-3 ms-3'>stools</h2>
                        <p className='ms-3'>Donec facilisis quam ut purus rutrum lobortis.</p>
                        <div className='btn'>view collection<FontAwesomeIcon className='ms-3' icon={faArrowRight} /></div>
                    </div>
                    <div>
                        <img src="stool.jpg" alt="pic" className='h-100 w-100 stools-image' />
                    </div>
                </div><div className="d-flex item-body rounded">
                    <div>
                        <h2 className='mt-3 ms-3'>tables</h2>
                        <p className='ms-3'>Donec facilisis quam ut purus rutrum lobortis.</p>
                        <div className='btn'>view collection<FontAwesomeIcon className='ms-3' icon={faArrowRight} /></div>
                    </div>
                    <div>
                        <img src="tables.jpg" alt="pic" className='h-100 w-100'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category