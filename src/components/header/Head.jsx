import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import SwiperCar from './Swiper';

function Head() {
    return (
        <>
        <div className='col-12 d-flex mt-3 mb-5'>
            <div className='col-6'>
                <h1 className='w-50 mt-5 pt-5 mb-5'>flexible chair</h1>
                <p className='p-header mb-5'>Donec vitae odio quis nisl dapibus malesuada.
                    Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <button className='btn mt-5 btn-header'><span className='me-1'>shop now</span><FontAwesomeIcon className='btn-icon' icon={faArrowRight} /> </button>
            </div>
            <div className='col-6'>
                <img src="header.png" alt="pic" className='w-100 rounded' height={500} />
            </div>
        </div>
        <div className=''><SwiperCar/></div>
        
        </>
    )
}

export default Head