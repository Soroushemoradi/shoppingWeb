import './category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryData from './categoryData';
function Category() {
    return (
        <>
            <div className='grid-3 mb-5 '>

                {
                    CategoryData.map(({ image, header, title }) =>
                        <>
                            <div className="d-flex item-body rounded">
                                <div>
                                    <h2 className='mt-3 ms-3'>{header}</h2>
                                    <p className='ms-3'>{title}</p>
                                    <button className='btn btn-category flex-center'><span className='me-1'>view collection</span><FontAwesomeIcon className=' btn-icon' icon={faArrowRight} /></button>
                                </div>
                                <div>
                                    <img src={image} alt="pic" className='h-100 w-100' />
                                </div>
                            </div>
                        </>
                    )
                }


            </div>
        </>
    )
}

export default Category